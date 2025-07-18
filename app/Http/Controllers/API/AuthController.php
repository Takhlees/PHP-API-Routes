<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\RateLimiter;

class AuthController extends Controller
{
     public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user'    => $user
        ], 201);

        
    switch ($user->role) {
        case 'admin':
            return redirect('/dashboards/admin');
        case 'teacher':
            return redirect('/dashboards/teacher');
        case 'student':
            return redirect('/dashboards/student');
        default:
            return redirect('/'); 
    }
    }

     public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

           $key = 'login:' . $request->ip() . ':' . $request->email;
           if (!RateLimiter::attempt($key, 5, function () {
           return true;
           })) {
    return response()->json([
        'message' => 'Too many login attempts. Please try again later.'
    ], 429);
}

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            'user' => $user,
            'redirect_to' => '/dashboards/' . $user->role
        ]);
         
    switch ($user->role) {
        case 'admin':
            return redirect('/dashboards/admin');
        case 'teacher':
            return redirect('/dashboards/teacher');
        case 'student':
            return redirect('/dashboards/student');
        default:
            return redirect('/'); // fallback
    }
    }

    public function update(Request $request, $id)
    {

    $key = 'update-user:' . $request->ip() . ':' . $id;
if (!RateLimiter::attempt($key, 5, function () {
    return true;
})) {
    return response()->json([
        'message' => 'Too many update attempts. Please try again later.'
    ], 429);
}
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $id,
        ]);

        $user->update($request->only(['name', 'email']));

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user
        ]);
    }

    public function destroy($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->delete();

    return response()->json(['message' => 'User deleted successfully']);
}

public function logout(Request $request)
    {
        try {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthenticated. Token missing or invalid.'
            ], 401);
        }

        $user->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully.'
        ]);
    } catch (\Throwable $e) {
        return response()->json([
            'message' => 'Server error during logout.',
            'error' => $e->getMessage()
        ], 500);
    }
}
}

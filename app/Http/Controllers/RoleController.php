<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function store(Request $request)
    {
        $validated  = $request->validate([
            'user_id' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
        ]);

        $role = Role::create($validated);

        return response()->json([
            'message' => 'Rol creado exitosamente',
            'role' => $role,
        ]);
    }
}

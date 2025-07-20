<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    public function index()
    {
        try {
            $todos = Todo::all();
            $return = [
                'resposta' =>
                'Tarefas carregadas com sucesso!',
                'data' => $todos,
                'success' => 1,
                200
            ];
        } catch (\Throwable $th) {
            \Log::error('Erro ao carregar tarefas: ', ['exception' => $th]);
            $return = [
                'resposta' => 'Erro ao carregar tarefas.',
                'success' => 0,
                500
            ];
        } finally {
            return response()->json($return);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'resposta' => 'Erro ao cadastrar!',
                'erros' => $validator->errors(),
                'success' => 0
            ]);
        }

        try {
            $todo = [
                'title' => $request->title
            ];

            $todo = Todo::create($todo);

            $return = [
                'resposta' =>
                'Tarefa cadastrada com sucesso!',
                'data' => $todo,
                'success' => 1,
                200
            ];
        } catch (\Throwable $th) {
            \Log::error('Erro ao cadastrar tarefa: ', ['exception' => $th]);
            $return = [
                'resposta' => 'Erro ao cadastrar tarefa.',
                'success' => 0,
                500
            ];
        } finally {
            return response()->json($return);
        }
    }

    public function destroy($id)
    {
        try {
            $todo = Todo::find($id);

            if ($todo) {
                $todo->delete();
                $return = [
                    'resposta' => 'Tarefa deletada com sucesso!',
                    'data' => $todo,
                    'success' => 1,
                    200
                ];
            } else {
                $return = [
                    'resposta' => 'Tarefa não encontrada.',
                    'success' => 0,
                    404
                ];
            }
        } catch (\Throwable $th) {
            \Log::error('Erro ao deletar tarefa: ', ['exception' => $th]);
            $return = [
                'resposta' => 'Erro ao deletar tarefa.',
                'success' => 0,
                500
            ];
        } finally {
            return response()->json($return);
        }
    }
}

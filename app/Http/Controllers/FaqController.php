<?php

namespace App\Http\Controllers;

use App\Models\Faq;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::all();

        return response()->json([
            'data' => $faqs,
        ]);
    }

}

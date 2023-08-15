<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\Faq;

class FaqTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testFaqConnection(): void
    {
        $faqs = Faq::all();

        foreach ($faqs as $faq) {
            $this->assertIsInt($faq->id);
        }
    }

    /** @test */
    public function testFaqApiResponse(): void
    {
        $response = $this->get('/api/faq');

        $response->assertStatus(200);
    }
}

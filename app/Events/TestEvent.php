<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class TestEvent extends Event
{
    use SerializesModels;

    public $sa;

    /**
     * Create a new event instance.
     *
     * @return void
     */

    public function __construct($sa)
    {
        $this->sa = $sa;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}

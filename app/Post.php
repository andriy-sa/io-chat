<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Post
 *
 * @method static \Illuminate\Database\Query\Builder|\App\Post hasDescription()
 * @mixin \Eloquent
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $image
 * @property boolean $published
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\App\Post whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Post whereTitle($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Post whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Post whereImage($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Post wherePublished($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Post whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Post whereUpdatedAt($value)
 */
class Post extends Model
{


    public function scopeHasDescription($query){
        $query->where('description','!=','');
    }
}

@extends('app')

@section('content')
<div class="container">
    @if($errors->any())
        <ul class="alert alert-danger">
            @foreach($errors->all() as $er)
                <li>{{ $er }}</li>
            @endforeach
        </ul>
    @endif
    <form method="post" action="{{ route('post_store') }}">
        <div class="form-group">
            <label for="">Title</label>
            <input name="title" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Description</label>
            <textarea name="description" class="form-control" rows="10"></textarea>
        </div>
        {!! csrf_field() !!}
        <button type="submit" class="btn btn-info">Save</button>
    </form>
</div>
@stop

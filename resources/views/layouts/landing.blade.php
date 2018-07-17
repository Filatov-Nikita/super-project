@extends('layouts.base')

@section('header')
    @include('parts.header')
@endsection

@section('content')
    <main>
        @include('blocks.aim')
        @include('blocks.videoBlock')
        @include('blocks.programms')
        @include('blocks.freeBlocks')
        @include('blocks.someBlock')
        @include('blocks.forms')
    </main>
@endsection

@section('footer')
    @include('parts.footer')
@endsection
---
pubDatetime: 2023-12-21T15:20:35Z
title: Learning too much at once
description: Reflections on the making of Arithmusic
featured: true
draft: false
tags:
  - wasm
  - rust
  - react
---

Right before (or around the beginning) of the AI/ML hype storm in 2018, I was pondering
if computers could "make music". I knew there was a whole field about this emerging, but I had
just finished my first DSP course and thought I had a good enough understanding on how to get this
idea started. (hint: I didn't, nor did I end up taking another DSP course which I regret)

Arithmusic was my first plunge at a Single-Page-Application (SPA). It was also like the classic meme
of learning Javascript alongside an abstracted and almost foreign framework (react.js). It was supremely confusing -
I had exposure to Javascript / jQuery in the past, but jumping into the world of Node.js,React, & ECMAScript 6 at the
same time had me conflating a lot of things...

"Was this 'spread' operator thing part of react?"

"Why do I have to `.bind()` everything in this component class?"

"wtf are props vs state"

Slowly but surely after scouring dozens of react tutorials, I sorta understood things.
Now that the UI/UX was somewhat in place, it was time to implement the actual backbone functionality
of Arithmusic - making sounds.

#### Enter the Wasm

Implementing sound generation was quite the trip. Started by trying to implement the math
by myself... in Javascript. Failed at the math, so I asked a question online to get me unblocked
with some pseudo code (also turned out my idea wasn't so novel). I translated it to JS, and after
fidgeting around with `window.AudioContext` I thought it should all work. Pressed play, andddddd! nothing.

But not actually, I heard a high pitched screech after about 20 seconds. It worked! But it was super slow
synthesizing the audio buffer. Managed to optimize it quite a bit by switching to typed float32 arrays
(did not know JS had typed arrays :shocked:). Got it down to about 5 seconds now, but still way to slow for a good UX.

If learning JS + react at the same time wasn't a bad enough idea in this project, how about throwing
in some WebAssembly + Rust?

#### Rust

We know WASM supports other low level languages like C, so why Rust?

I have a pretty good fundamental grasp of C, but I wouldn't call myself a C developer. And at the end of this, I won't
call myself a Rust developer. I don't have strong enough opinions yet, but it sure is fun reading the drama from time to time.

I chose Rust mostly for the same reason I choose most tech things in life; it's shiny and new! It was fun learning a new language from
scratch again at this point in my career - especially a more "modern" low level one after being in the high level world for so long.
Things like `usize` were very annoying at first needing to cast to do simple things like multiply with float32's. After emotionally getting over that (and compilation errors), and a little data modeling and JSON parsing, I was in business.

I clicked play and it fired off a sound instantaneously - it wasn't the correct sound but after adding some wrap limits to my buffer processing and fixing some datatypes - it sounded just like the previous JavaScript implementation! But this was much, much faster to synthesize.

-- insert Borat great success gif here --


 The most enjoyable parts of Rust code I wrote was:
 * exploring closure functions for multiplexing different type of wave functions (sine, sawtooth, triangle)
 * implementing mathematical functions / windows in fashion that I learned in my DSP class
 * the WASM interface, and trying to cram unsafe, raw memory buffers back into the Javascript world

 Under construction... (sorry, this is my first blog and not too sure how to wrap everything up yet)


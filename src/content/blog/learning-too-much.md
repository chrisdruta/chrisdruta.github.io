---
pubDatetime: 2023-12-21T15:20:35Z
title: Learning too much at once
description: Reflections on the making of Arithmusic
featured: true
draft: true
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

"wtf are props"

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

I wouldn't call myself a Rust developer.


---
layout: default
---

# Cape Town Red

html and CSS for a Taxi Kata involving Robots (the traffic kind)

## How it works

Everything lives inside a `div.road`: you don't need to change this.

### Robots

The first **robot** looks like this:

{% highlight html%}
<div class="robot">
  <div class="lights-go">
    <div class="stop">&bull;</div>
    <div class="slowdown">&bull;</div>
    <div class="go">&bull;</div>
  </div>
</div>
{% endhighlight %}

You can change `light-go` (green) to `lights-slowdown` (orange) or `lights-stop` (red).

Other robots need a position:

{% highlight html%}
<div class="robot one-of-four">
...
</div>
{% endhighlight %}

The position class comes in three flavours: four slots, six slots, or nine slots. Positions are calculated as a percentage of the full width. Specify positions using a `x-of-y` pattern, e.g. `one-of-four`, `two-of-six`, `three-of-nine`.

### Taxi(s)

A **taxi** looks like this, and always needs a position:

{% highlight html%}
<div class="taxi slot-one-of-six">
  <div class="wheels"></div>
</div>
{% endhighlight %}

The position class comes in three flavours: four slots, six slots, or nine slots. Positions are calculated as a percentage of the full width. Specify positions using a `slot-x-of-y` pattern, e.g. `slot-one-of-four`, `slot-two-of-six`, `slot-three-of-nine`.

Use the same number of slots for taxis and robots or things will look weird.

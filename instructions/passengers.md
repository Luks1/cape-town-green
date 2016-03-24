---
layout: default
---

## Passengers

![](/img/passengers.jpg)

Now we need some passengers at the Taxi Rank for our Taxi to pick up. Use the supplied `passengerList` function to create a random number of passengers.

Call it like this:

{% highlight javascript %}
//this will create a random list not bigger than 40: with numbers 5, 10 or 20
var passengerCount = passengerCount(40);
{% endhighlight %}

Use the supplied `displayQueueCount` function to display the number of people queueing at the rank. If the taxi is in the first block, the `taxiLocationCounter` will be 1.

When that is the case, make the Traffic Light red and load the people queueing onto the taxi. Use the supplied `displayTaxiPassengerCount` to display the number of passengers on the taxi. Remember to set the number of people at the rank to 0.

After a 3 second delay (use [setTimeout](https://developer.mozilla.org/de/docs/Web/API/WindowTimers/setTimeout)) set the Traffic Light to green: the taxi should be able to pull away.

Offload the passengers once you are in the ninth (last) block. Set the number of people on the taxi to 0.

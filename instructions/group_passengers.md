---
layout: default
---

# Group passengers

Things are a bit chaotic now as people get onto the taxi and they don't have the correct money to pay for the trip.
The taxi drivers asked the rank manager to sort this issue out. The rank manager came up with the idea for the people to queue into 'budget' rows. There will be 3 rows at the rank a R5, R10 and a R20 queue. As a taxi pull up it only pick people from the correct queue.

##Create a `Rank` constructor function/class.

It should take in a list of numbers in it's constructor function and create a map of numbers for 5, 10 and 20 in the `queues` attribute. The queues map keeps a count of how many people are in a specific queue. It should also keep the count of people waiting for a Taxi updated on the screen. Look in the html there are some commented out html for the R10 and R20 queues. Add functions similar to the `displayQueueCount` for the two new queues and display the correct counts on the screen.

Add a `passengerLoad` function that takes in a fare and the number of passengers. It should return the number of passengers to be loaded onto the taxi. And it should subtract the number of passengers that boarded a taxi from the right count in the `queues` map.

## Create a `Taxi` constructor function/class.

You should have a moveForward function you wrote in the past into the Taxi class.

Take it's capacity and fare through the constructor of the function. And expose both as member variables.

Add a:
* `load` function on the taxi. It takes in a number of passengers to load onto the taxi.
* `taxiLoad` attribute that keeps track of the number of passengers on the taxiLoad
* `unload` function that unloads all the people from the taxi.

{% highlight javascript %}

//create a taxi where the fare is R5 and capacity is 20

var taxi = new Taxi(5, 20);

{% endhighlight %}

The `Taxi` class should take care of displaying the number of passengers on the taxi.

> Create a Taxi with a random capacity & fare after a taxi reached the last slot. A new Taxi should be displayed in the first slot. See how long it take to transport all the passengers.

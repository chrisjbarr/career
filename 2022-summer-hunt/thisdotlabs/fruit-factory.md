# Fruit Factory story

My coworker Sarah had requested an additional property be added to a particular `Thing` in one of our applications. In this particular case, this `Thing` was a `Fire Hydrant` which in our system's heirarchy was also an `Asset`. There are other types of `Assets` in this system: `Sewer Openings`, `Valves`, etc. When I asked her if this property was applicable to all `Assets` she didn't quite understand the question and stated that it was just for `Fire Hydrants`... and that the property should only exist on a `Fire Hydrant`. Through a little more questioning I discovered that the requested property could be applicable to all `Assets` under certain scenarios which she hadn't thought of. I wound up placing this property on an `Asset` - and I had this [unedited] interaction over Teams with her to help her understand the approach:

[11:03 AM] Chris Barr

Let's say you created a Fruit and you called it an Apple and you said this particular Apple tastes sweet and it's color is Red. And then you created an Orange and you said that Orange also tastes Sweet but it's color is Orange.

[11:03 AM] Chris Barr

Now let's say a month later you're hungry for something else, and you decide to create a new Fruit and called it a Grapefruit and made it taste Bitter.

​[11:04 AM] Chris Barr

Now let's say 3 months later you're like, hmm, Fruits should have Seeds... and so you pick up each fruit and you say Apple has Seeds and copy paste onto Orange and copy paste onto Grapefruits

​[11:04 AM] Chris Barr

So you did three things when you finally realized that Fruits have or have not Seeds.

[11:05 AM] Chris Barr

So now let's pretend we did things a little 'abstract'... Instead of creating Fruits manually like you have the last 6 months you decide to create a Fruit Factory

[11:05 AM] Chris Barr

And this Fruit Factory creates Fruits... and you note that each Fruit has a type, tastes like something, has a color and can or cannot have seeds.

[11:06 AM] Chris Barr

And you tell this Fruit Factory which fruits it can build and how they're defined:

Apple: tastes sweet, is red, has seeds

Orange: tastes sweet, is orange, has seeds

Grapefruit: tastes bitter, is orange, has seeds

[11:07 AM] Chris Barr

And for the next four months you press a button on teh type of fruit you want, and the Fruit Factory creates that fruit for you.

[11:08 AM] Chris Barr

3 months later, you decide that all fruits can or cannot have worms... so you update the definition of a Fruit in the Fruit Factory that each fruit can or cannot have worms, and you tick a box for yes or no for each fruit... now ALL fruits can or cannot have worms.

[11:08 AM] Chris Barr

So now lets imagine every fruit in teh universe- thousands? tens of thousands? and our factory can create all of them. it's better to update the definition of a Fruit to have or have not worms in one place, then copy paste it onto every single fruit in existence

[11:09 AM] Chris Barr

hopefully that helps explain why it's better to be abstract sometimes than it is to copy paste and have multiple pieces of hte same code around

[11:09 AM] Chris Barr

but it probably doesn't lol

[11:10 AM] Chris Barr

any developer here would poke holes in all that i just wrote but it hink from a business perspective it may help you :)

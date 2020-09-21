# Microbe Homework

This was a fun exercise to do, I really like the colors that were chosen for the branding.

I first built the page how I'd do it if it was completely custom, without pre-made components, etc. The carousels and interactive pieces should be working there.
Then I went through and added some classes and such from the site, and microbe.css and unify css files.

A few thoughts on the custom page: 
* The page is built as fully responsive, so you should be able to drag your browser down to very small and it'll look good at all screen sizes, regardless of device type.
* I wasn't sure what 'scroll initiated slide transition for text boxes' meant in the context of the hero, normally I'd absolutely ask for clarification, but in the interest of time I moved on there. Let me know if I should put something together for this, happy to do so!
* The Quick Start guide is active as a widget that transitions with mostly CSS, and just uses JavaScript to change classes.
    * I like to use CSS for animations/widgets whenever possible, as it's rendered by the graphical hardware of a device and usually runs much smoother.
* I saw that Slick.js was in the vendors folder and thought it was a natural fit for the Testimonials widget.
    * I've added autoplay, a 6 second delay between slides, and optional arrows.
* The learn section was one of the trickiest, as moving from Desktop to Mobile wasn't ideal.
    * In this situation I'd probably ask for additional mobile friendly images, and use the <picture> element, so just the image actually needed loads based on screen size.
    * I'd maybe also quickly meet with the designer for ideas on how to make already existing images work with mobile.
    * What I ended up with works pretty well for mobile, but it's not 100% ideal!
    * I changed the hover state to visible text for mobile.
    
* At the end I added some site and unify classes, especially on containers, buttons, and with some of the gradients.

Some food for thoughts:
    * In regards to using hover state to hide text until hover. That can be an awesome effect, and it's nitpicky on my part, but the page might also be dinged by Search Engines for hiding text on the page (a common tactic to game SEO, obviously not what you're doing here, but the Google Bot might not know that).
    * In the product widgets, I might argue that adding each product as its own image might give a better SEO impact, as the alt tags can have the product names and uses in them.

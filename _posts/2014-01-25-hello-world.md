---
layout: layout
title: Hello World
author: Adam
description: My first post
---

This is my first post on my [GitHub Pages]({{ site.url }}).
I am experimenting with the [Jekyll](http://jekyllrb.com/) static site generator, as well as [Bootstrap](http://getbootstrap.com/).
I also hope to use this as a place to improve several of my skills, including communications, writing, css & javascript.

I hope to write about my professional experiences and achievements.
I am usually very bad at projects like these, so I hope I am able to keep this up.

This allows me to write posts using a simple text editor (<kbd>vim</kbd>) to write posts and <kbd>git</kbd> to keep track of the site.
I can include inline code `puts "Hello World"` and multiline code like this:

{% highlight python %}
import requests

urls = [ "http://www.google.com", "www.bbc.co.uk" ]

for url in urls:
    req = requests.get(url)
    print("%s: (%d)" % (url, req.status_code))
{% endhighlight %}

Lists can be included:

 1. First item
 2. Second item

 * Without order
 * A list

> Blockquotes could be useful for including quotes with _emphasis_ and __strong emphasis__

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

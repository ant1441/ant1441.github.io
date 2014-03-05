---
layout: post
title: Leeds DevOps
author: Adam
description: Leeds DevOps 4th March. Mark Barret and Simon Davy
tags: devops leeds
---

Last night I attended [Leeds DevOps](http://www.leedsdevops.org.uk/) at The Adelphi in leeds.
There were two speakers, Mark Barret speaking on LeedsDataThing and the open data movement in Leeds.
Also speaking was [Simon Davy](https://twitter.com/bloodearnest), talking about [JuJu](https://juju.ubuntu.com/) a tool to simplify deployment of services.
I also had some interesting discussions with [@RightSaidJames](https://twitter.com/RightSaidJames) from [Numiko](http://numiko.com/), and also [Ian Massingham](https://twitter.com/IanMmmm) from AWS (including a $50 AWS credit!).

## Open Data

Mark Barret, speaking first on *Open Data* in Leeds was discussing the upcoming launch of [Leeds Data Thing](http://www.leedsdatathing.co.uk/) this Thursday.
Open Data is a powerful tool in giving government, both local and national, both accountibility for a lot of it's actions, but also for making use of the skills of the people in gaining a greater understanding of the data they have available.

Leeds Data Thing is aiming to make Leeds a world leader in Open Data.
Mark discussed how [Gov.uk](http://gov.uk) has several thousands of data sets from government, but only a few hundred from local councils.
Many local councils in the UK only release small amounts of data, such as [council expenditure over £500](https://www.gov.uk/government/policies/making-local-councils-more-transparent-and-accountable-to-local-people).

Chicago, on the other hand, has several hundred open data sets, from annual budget to long term crime statistics ([City of Chicago Data Portal](https://data.cityofchicago.org)).
Leeds Data Thing aims to do the same for Leeds, and aims to launch this Thursday with 50 data sets from Leeds City Council, as well as data from many local businesses, including [Mrs Atha's](http://mrsathasleeds.com/), from where I am writing this, who are releasing information on the geographical location of their coffee suppliers.

One of the more interesting data sets mentioned was hourly footfall statistics for Leeds City centre for the past 10 years.
This, gathered from a dozen places in the city centre will allow visualisations of areas of the city centre which have been busier and quieter over that time period.
I would be very interested to link this with other data to see how local conditions affect this (eg. what areas of Leeds are quite during the day, but busy at night, when bars open/close?).

## JuJu
Next up was Simon Davy of [Canonical](http://www.canonical.com/) speaking on JuJu, a tool to allow deployment of services with minimal fuss, while making use of existing product expertise.

JuJu is a tool allowing the use of *Charms*, open source configurations, to deploy your application to any given cloud provider including your own laptop.
This enables very rapid deployment of hadoop, OpenStack etc. while allowing experts in these tools to include experience & skill gained expertise in the charms.
This means, for example with mySQL I do not need to learn all the specific configuration settings needed to achieve the high performance and scalability I might need. 

I aim to use JuJu and its ability to rapidly deploy services as a way to test out technologies which I previously would have had to procure a server, configure, install etc.

As usual for talks with Simon, I went away with a list of tools and topics to investigate, so as well as JuJu, I also aim to investigate __lxc__, which apparently allows you to create lightweight 'virtual machine' like containers to easily test tools in an isolated environment, and also __HAProxy__, which Canonical use for load balancing between pretty much all of their JuJu deployed services.
__import.io__ is in my notes, but I do not remember who mentioned that, or what it is.

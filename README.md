# Game Collection Manager (Working Title)

> A self-hosted web application for managing your video game collection and backlog.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Planned Features](#planned-features)

## General Information

Game Collection Manager is a self-hosted web application for managing your
video game collection and backlog. It is meant to be an easy way to view your
games at a glance and keep track of them without having to create unwieldy
spreadsheets. The app also allows importing game information from
[IGDB](https://www.igdb.com/) and [Steam](https://store.steampowered.com/),
reducing the friction involved with adding new entries to your collection.
Intuitive batch editing allows you to quickly update multiple entries
with minimal effort, making it easy to catch up after not recording change
for a long period of time.

### Why Am I Making This?

Over the years I've tried organizing my games using a number of methods, including
various websites, spreadsheets, and even Obsidian with a _lot_ of plugins.
Some were slow, some were painful to look through, and they all started to
feel like too much work after a while.

I wanted something that was fast and easy to use, but most importantly I wanted
something that _wouldn't be too much effort to come back to if I left it
alone for a while_. We've all been there: how many times have you had
information to keep track of and stopped recording changes
for various reasons? How painful was it to dive back in and enter all the
changes that piled up? **This is the problem I aim to solve**. As an adult
living with ADHD, I have a lot of things to track and can't always keep up
with recording everything. I want to make it as easy as possible to return to
my trackers after a long period away from them.

## Technologies Used

This is a full stack application written in Typescript. It uses React on the
front end and Node/Fastify/PostgreSQL on the back end.

### Front End

- Typescript - version 5.5.3
- Vite - version 5.4.8
- React - version 18.3.1
- PostCSS - version 8.4.47

### Back End

- Typescr.ipt - version 5.5.3
- Node.js - version 22.9.0
- Fastify - version 5.0.0
- PostgreSQL - version 17.0

## Planned Features

- [ ] Add and remove games from collections and sub-collections
- [ ] Group games by collections and sub-collections
- [ ] View collections and sub-collections in a dashboard
- [ ] Manage backlog by assigning a status to each game
- [ ] Add notes to games
- [ ] Custom fields
- [ ] Batch editing
- [ ] Multiple users with password authentication
- [ ] Import game information from IGDB
- [ ] Import library from Steam
- [ ] Import playtime from Steam
- [ ] Export to CSV
- [ ] Multiple UI themes

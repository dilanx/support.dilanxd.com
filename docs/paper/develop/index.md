---
pagination_prev: paper/index
pagination_next: paper/develop/using-user-data
---

# Developing with Paper

:::note

This page is intended for people that want to use Paper APIs to incorporate Paper data or user plans and schedules into their own applications. If you're looking to contribute to Paper itself, see [Contributing to Paper](../contribute/index.md).

:::

## About developing with Paper

The Paper web application that people use (on [paper.nu](https://www.paper.nu)) is purely client side. It makes use of a variety of custom-built Paper APIs and data systems to function effectively and securely. However, some functionality of the APIs is not just limited to Paper itself and instead can be used by other applications looking to incorporate data from Paper. Here are a few things that can be done with Paper APIs:

- **Get all general course data** as used in the planning view.
- **Get course data for specific terms** as used in the scheduling view.
- **Read (and potentially write) user plan and schedule data** (authentication on behalf of user is required).

At least at the moment, Paper is a tool specific to and funded by Northwestern University. I think it's really cool when others build other tools like this and would be happy to be a part of improving user experience by connecting these tools together.

## Getting started

No matter what you're using the APIs for, self registration is not currently supported. Submit an [API Usage Request](https://forms.dilanxd.com/paper-support?t=API+Usage+Request) with what you're looking to use the API for and I'll get back to you with relevant instructions.

Find relevant documentation here:

- **[Using User Data](./using-user-data.md)**
- **[Accessing Course Data](./accessing-course-data.md)**
- **[Using Course Data](./using-course-data.md)** (type reference included)
- **[API Reference](./api-reference.mdx)** (type reference included)

---
pagination_prev: paper/develop/using-user-data
pagination_next: paper/develop/using-course-data
---

# Accessing Course Data

To get access to course data, submit an [API Usage Request](https://forms.dilanxd.com/paper-support?t=API+Usage+Request) with what you're building and what you're looking to use the API for. Once approved, you can follow the instructions below to get started.

You can access course data in two ways:

- **One-time data fetch**

  If you only need one set of course data, we can simply provide you with any necessary data files.

  One-time data fetch is useful if you're building something that doesn't need the latest course data.

  - **✔ YES** Current generic course data for all courses
  - **✔ YES** Current specific term data for a current or past quarter
  - **✘ NO** The latest generic course data as it changes (for example, when new courses are added)
  - **✘ NO** The latest specific term data for a quarter as it changes (for example, when section times are updated or new sections are offered)
  - **✘ NO** Future and past specific term data for all quarters that Paper has data for

- **Live data fetch**

  If you plan to publish your app to the community and make it last over time, you'll need an automated way to get the latest data. The Paper Data System refreshes its data 3 times a week and automatically has data for a new quarter on the same day it's available to students. The API (Application Programming Interface) and CDN (Content Delivery Network) can share this data with you.

  - **✔ YES** Current generic course data for all courses
  - **✔ YES** Current specific term data for a current or past quarter
  - **✔ YES** The latest generic course data as it changes (for example, when new courses are added)
  - **✔ YES** The latest specific term data for a quarter as it changes (for example, when section times are updated or new sections are offered)
  - **✔ YES** Future and past specific term data for all quarters that Paper has data for

## One-time data fetch

If you're approved for data from Paper, you'll receive any necessary files.

### Using the data

[Learn how to use the data in your application.](./using-course-data.md)

## Live data fetch

If you're approved for live data from Paper, you'll receive API access for free, unlimited course data access.

### API Reference

The starting API endpoint will provide you with JSON data in the format below. You can use this to retrieve the course data you're looking for.

| Key        | Type                                                  | Description                                                                              |
| ---------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `latest`   | `string`                                              | The term number of the latest term available in Paper.                                   |
| `subjects` | `string`                                              | The timestamp (millis since epoch) of the last time the subject data was updated.        |
| `plan`     | `string`                                              | The timestamp (millis since epoch) of the last time the generic course data was updated. |
| `terms`    | \{ \[term number (string)\]: [TermInfo](#terminfo) \} | A map of term numbers to their respective term info.                                     |

#### TermInfo

| Key       | Type     | Description                                                                    |
| --------- | -------- | ------------------------------------------------------------------------------ |
| `name`    | `string` | The name of the term.                                                          |
| `updated` | `string` | The timestamp (millis since epoch) of the last time the term data was updated. |
| `start`   | `string` | The date (YYYY-MM-DD) of the start of the term.                                |
| `end`     | `string` | The date (YYYY-MM-DD) of the end of the term.                                  |

### Caching

When using the live data fetch method, it's important to cache the data you receive to avoid unnecessary usage of Paper servers and to keep your application running fast. In fact, **doing so is required or else your application may end up being blocked**. The Paper client side application (https://www.paper.nu) caches the data from the Paper Data System.

When you're loading data, you should check timestamps in the starting API endpoint and compare it with your cached data. If you have outdated data, you can then fetch the new data (which could potentially be 2 MB to 8 MB or so) and update your cache. If you have the latest data, don't fetch new data.

### Authorized Domains

When you're approved for live data, you'll be able to fetch data from the API and the CDN from `localhost`. To use it in production, you'll need to supply your domain name to us to have it authorized.

### Attribution

Since you're using live data made available automatically by the Paper Data System, you should attribute the data to Paper! This does not need to be done front and center, but should be accessible by users of your application. If you have an "about" section somewhere where you include your own attribution, you can include this there as well.

You can do this in a couple of ways:

#### Image Attribution

You can use the image below, available in both black and white! It should link to `https://www.paper.nu`.

[<img src="/assets/paper-data-attribution-black.png" width="256"/>](https://www.paper.nu)

[Download the image in black](/assets/paper-data-attribution-black.png) • [Download the image in white](/assets/paper-data-attribution-white.png)

#### Text Attribution

If you really don't want to include the image 🥺, you can include text that explicitly says how the course data is provided by Paper. The text should link to `https://www.paper.nu`.

### Using the data

[Learn how to use the data in your application.](./using-course-data.md)

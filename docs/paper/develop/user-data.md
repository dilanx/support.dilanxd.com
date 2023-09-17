---
pagination_prev: paper/develop/index
pagination_next: paper/develop/course-data
---

# Using User Data

:::caution Full data format shift coming in v3.0

In the upcoming **Paper version 3**, user data is no longer structured in the way outlined on this page. The new structure is completely different but more intuitive and easy to work with, as it's structured as a JSON object rather than a URL query params string. This is possible because of the [removal of the URL save data system](https://dilan.blog/discontinuing-the-paper-url-save-data-system). It's strongly recommended that if you're planning on developing with Paper, you should wait until version 3 and its documentation is released.

:::

## Using the API

Refer to the **[API Reference](./api-reference.mdx)** for the things you can do with the Paper API.

## Document content serialization

Document content (the content of plans and schedules) returned from the API is serialized as the string conversion of [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

Content is serialized in the formats below. These are `key=value` pairs representing query parameters of a URL. You can use URLSearchParams to parse these strings into a usable object.

:::note

This system is a bit stupid and honestly quite confusing but there's a reason it's done this way.

Read **[Why does Paper use URLSearchParams for data serialization?](./reason-for-using-urlsearchparams.md)** if you're interested.

:::

### Plan content

**Main Plan Data: `y{Y}q{Q}={SUBJECT_ID}_{CATALOG_NUMBER},...`**

Each subject ID and catalog number combo for a given quarter on the plan are separated by commas.

- **Y**: the year in which the course is located on the plan (0-9)
- **Q**: the quarter in which the course is located on the plan (0-3)
- **SUBJECT_ID**: the subject ID of the course (convert this to the major name using the [`major_ids`](./course-data.md#plan-data) key of the plan data file)
- **CATALOG_NUMBER**: the catalog number of the course
- **...**: comma-separated list of courses in the same year and quarter with the same format as above

**Bookmarks: `f={SUBJECT_ID}_{CATALOG_NUMBER},...;{SUBJECT_ID}_{CATALOG_NUMBER},...`**

Before the semicolon is a comma-separated list of serialized course IDs that are bookmarked and not counted for credit. After the semicolon is the same except they are counted for credit.

### Schedule content

**Term: `t={TERM_ID}`**

- **TERM_ID**: the Northwestern term ID for a given quarter

**Sections: `s={COURSE_ID_NUMBER}-{SECTION_NUMBER},...`**

Each course ID number and section number combo on the schedule are separated by commas.

- **COURSE_ID_NUMBER**: the course ID number
- **SECTION_NUMBER**: the section number
- **...**: comma-separated list of courses in the same year and quarter with the same format as above

### Example

These conversions are done in the Paper source code. Both code snippets show data being loaded from an instance of URLSearchParams initialized with the serialized data string.

- [Loading **plan data**](https://github.com/dilanx/paper.nu/blob/eddd28b05388e1d7356ea993edd9a4737ae39063/src/PlanManager.ts#L24-L123)
- [Loading **schedule data**](https://github.com/dilanx/paper.nu/blob/eddd28b05388e1d7356ea993edd9a4737ae39063/src/ScheduleManager.ts#L24-L92)

---
pagination_prev: paper/develop/user-data
pagination_next: paper/develop/api-reference
---

# Using Course Data

First, you'll need instructions and access to course data. Then, you can proceed.

All course data is stored in a series of quite large minified JSON files. One JSON file holds the latest plan data (around 2 MB - 3 MB), and each term (quarter) available to Paper has a JSON file with the term-specific schedule data (each around 3 MB - 4 MB). While schedule data files doesn't include all of the course data like the plan data file does, schedule data files tend to be larger since they can include paragraphs of descriptions provided by instructors.

There is currently no standalone conversion tool available to convert the JSON files into a more usable format. Instead, you'll need to use the tables below to understand the structure of these files.

You can see these conversions being made [here in the Paper source code](https://github.com/dilanx/paper.nu/blob/main/src/utility/DataMap.ts).

## Plan data

The following are the keys of the root object of the plan data file.

- **courses** - An array of all current courses.
- **legacy** - An array of old courses that used to be included in the data from the registrar but no longer are. This is important in case a user has a plan that includes one of these courses back when it may have been offered.
- **majors** - An object where the keys are the course subject names (ex. `"COMP_SCI"`) and the values include the subject ID used by Paper serialization (ex. `"027"`) (you'll need this if reading user plan data), the full name (ex. `"Computer Science"`), and the color theme used in Paper (ex. `"blue"`).
- **major_ids** - A object that maps subject IDs to subject names (ex. `"027"` to `"COMP_SCI"`).

| Short       | Long      | Type                                      |
| ----------- | --------- | ----------------------------------------- |
| `courses`   | courses   | [PlanCourse](#plancourse)[]               |
| `legacy`    | legacy    | [PlanCourse](#plancourse)[]               |
| `majors`    | subjects  | {string _to_ [PlanSubject](#plansubject)} |
| `major_ids` | major ids | {string _to_ string}\*                    |

_\* This property will be removed in **Paper v3**._

## Schedule data

THe schedule data file consists of an array of [ScheduleCourse](#schedulecourse).

## Type Reference

Many properties in these types will not always exist. I highly recommend null checking every one.

### PlanCourse

| Short | Long               | Type                            |
| ----- | ------------------ | ------------------------------- |
| `i`   | id                 | string                          |
| `n`   | name               | string                          |
| `u`   | units              | string                          |
| `r`   | repeatable         | boolean                         |
| `d`   | description        | string                          |
| `p`   | prereqs            | string                          |
| `s`   | distribution areas | [DistrosString](#distrosstring) |
| `l`   | placeholder        | boolean                         |

### PlanSubject

| Short | Long    | Type     |
| ----- | ------- | -------- |
| `i`   | id      | string\* |
| `c`   | color   | string   |
| `d`   | display | string   |

_\* This property will be removed in **Paper v3**._

### ScheduleCourse

| Short | Long           | Type                                  |
| ----- | -------------- | ------------------------------------- |
| `i`   | course id      | string                                |
| `c`   | school         | string                                |
| `t`   | title          | string                                |
| `u`   | subject        | string                                |
| `n`   | catalog number | string                                |
| `s`   | sections       | [ScheduleSection](#schedulesection)[] |

### ScheduleSection

| Short | Long                    | Type                                               |
| ----- | ----------------------- | -------------------------------------------------- |
| `i`   | section id              | string                                             |
| `r`   | instructors             | [SectionInstructor](#sectioninstructor)[]          |
| `t`   | title                   | string                                             |
| `k`   | topic                   | string                                             |
| `u`   | subject                 | string                                             |
| `n`   | catalog number          | string                                             |
| `s`   | section id              | string                                             |
| `m`   | meeting days            | ([MeetingDaysString](#meetingdaystring) \| null)[] |
| `x`   | start time              | ([Time](#time) \| null)[]                          |
| `y`   | end time                | ([Time](#time) \| null)[]                          |
| `l`   | room                    | string[]                                           |
| `d`   | start date              | string                                             |
| `e`   | end date                | string                                             |
| `c`   | component               | string                                             |
| `a`   | capacity                | int                                                |
| `q`   | enrollment requirements | string                                             |
| `p`   | descriptions            | [SectionDescription](#sectiondescription)[]        |
| `o`   | distribution areas      | [DistrosString](#distrosstring)                    |

### SectionInstructor

| Short | Long           | Type   |
| ----- | -------------- | ------ |
| `n`   | name           | string |
| `p`   | phone          | string |
| `a`   | campus address | string |
| `o`   | office hours   | string |
| `b`   | bio            | string |
| `u`   | url            | string |

### Time

| Short | Long   | Type |
| ----- | ------ | ---- |
| `h`   | hour   | int  |
| `m`   | minute | int  |

### DistrosString

A `DistrosString` is a normal string where each character represents a distribution area.

| Character | Distribution Area              |
| --------- | ------------------------------ |
| 1         | Natural Sciences               |
| 2         | Formal Studies                 |
| 3         | Social and Behavioral Sciences |
| 4         | Historical Studies             |
| 5         | Ethics and Values              |
| 6         | Literature and Fine Arts       |
| 7         | Interdisciplinary Studies      |

For example, the string `"14"` means both the Natural Studies and Historical Studies distribution areas are linked to the course.

### MeetingDaysString

A `MeetingDaysString` is a normal string where each character represents a day of the week.

| Character | Day of the Week |
| --------- | --------------- |
| 0         | Monday          |
| 1         | Tuesday         |
| 2         | Wednesday       |
| 3         | Thursday        |
| 4         | Friday          |

For example, the string `"024"` means the section includes a repeated meeting time on Monday, Wednesday, and Friday.

### SectionDescription

A `SectionDescription` is an array of strings (`string[]`). The first element is the description title. The second element is the description value.

For example, a section may have the following `SectionDescription[]` value:

```json
[
  [
    "Overview",
    "This is an overview of this class. Blah blah blah words here words there and so on."
  ],
  [
    "Class Materials",
    "You'll need this textbook and this calculator and this device and so on."
  ]
]
```

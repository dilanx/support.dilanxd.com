---
pagination_prev: paper/develop/user-data
pagination_next: paper/develop/api-reference
---

# Using Course Data

First, you'll need instructions and access to course data. Then, you can proceed.

All course data is stored in a series of quite large minified JSON files. One JSON file holds the latest plan data (around 2 MB - 3 MB), and each term (quarter) available to Paper has a JSON file with the term-specific schedule data (each around 3 MB - 4 MB). While schedule data files doesn't include all of the course data like the plan data file does, schedule data files tend to be larger since they can include paragraphs of descriptions provided by instructors.

There is currently no standalone conversion tool available to convert the JSON files into a more usable format. Instead, you'll need to use the tables below to understand the structure of these files.

You can see these conversions being made [here in the Paper source code](https://github.com/dilanx/paper.nu/blob/main/src/utility/DataMap.ts).

## Subject data

The following are the keys of the root object of the subject data.

- **subjects** - A map of all subject data.
  - key: the subject code (ex. COMP_SCI)
  - value: information on the subject relevant to Paper

| Short      | Long     | Type                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| `subjects` | subjects | \{ \[subject\]: [SubjectInformation](#subjectinformation) \} |

## Plan data

The following are the keys of the root object of the plan data.

- **courses** - An array of all current courses.
- **legacy** - An array of old courses that used to be included in the data from the registrar but no longer are. This is important in case a user has a plan that includes one of these courses back when it may have been offered.

| Short     | Long    | Type                        |
| --------- | ------- | --------------------------- |
| `courses` | courses | [PlanCourse](#plancourse)[] |
| `legacy`  | legacy  | [PlanCourse](#plancourse)[] |

## Schedule data

The schedule data consists of an array of [ScheduleCourse](#schedulecourse).

## Type Reference

Many properties in these types will not always exist. I highly recommend null checking every one.

### SubjectInformation

_in [subject data](#subject-data)_

| Short | Long      | Type                        | Description                           |
| ----- | --------- | --------------------------- | ------------------------------------- |
| `c`   | color     | [ColorString](#colorstring) | the color of the subject              |
| `d`   | full name | string                      | the full name of the subject          |
| `s`   | schools   | string[]                    | the schools the subject is offered in |

### PlanCourse

_in [plan data](#plan-data)_

| Short | Long                     | Type                                    | Description                                                   |
| ----- | ------------------------ | --------------------------------------- | ------------------------------------------------------------- |
| `i`   | id                       | string                                  | the subject and catalog number of the course                  |
| `n`   | name                     | string                                  | the name of the course                                        |
| `u`   | units                    | string                                  | the number of units the course is worth                       |
| `r`   | repeatable               | boolean                                 | whether the course is repeatable                              |
| `d`   | description              | string                                  | the description of the course                                 |
| `p`   | prerequisites            | string                                  | the prerequisites of the course                               |
| `s`   | distribution areas       | [DistrosString](#distrosstring)         | the distribution areas that the course fulfills               |
| `f`   | foundational disciplines | [DisciplinesString](#disciplinesstring) | the foundational disciplines that the course fulfills         |
| `c`   | school                   | string                                  | the school the course is in                                   |
| `l`   | placeholder              | boolean                                 | whether the course is a placeholder                           |
| `t`   | terms                    | string[]                                | the terms IDs of when the course has been offered in the past |

### ScheduleCourse

_in [schedule data](#schedule-data)_

| Short | Long           | Type                                  | Description                         |
| ----- | -------------- | ------------------------------------- | ----------------------------------- |
| `i`   | course id      | string                                | the course ID number provided by NU |
| `c`   | school         | string                                | the school the course is in         |
| `t`   | title          | string                                | the name of the course              |
| `u`   | subject        | string                                | the subject of the course           |
| `n`   | catalog number | string                                | the catalog number of the course    |
| `s`   | sections       | [ScheduleSection](#schedulesection)[] | the sections of the course          |

### ScheduleSection

_in [ScheduleCourse](#schedulecourse)_

| Short | Long                     | Type                                               | Description                                               |
| ----- | ------------------------ | -------------------------------------------------- | --------------------------------------------------------- |
| `i`   | section id               | string                                             | the course ID number provided by NU with a section number |
| `r`   | instructors              | [SectionInstructor](#sectioninstructor)[]          | the instructors of the section                            |
| `t`   | title                    | string                                             | the name of the course                                    |
| `k`   | topic                    | string                                             | the topic of the section                                  |
| `u`   | subject                  | string                                             | the subject of the course                                 |
| `n`   | catalog number           | string                                             | the catalog number of the course                          |
| `s`   | section number           | string                                             | the section number of the section                         |
| `m`   | meeting days             | ([MeetingDaysString](#meetingdaystring) \| null)[] | the meeting days for each time slot of the section        |
| `x`   | start time               | ([Time](#time) \| null)[]                          | the start time of the section                             |
| `y`   | end time                 | ([Time](#time) \| null)[]                          | the end time of the section                               |
| `l`   | room                     | string[]                                           | the location of the section                               |
| `d`   | start date               | string                                             | the start date of the section                             |
| `e`   | end date                 | string                                             | the end date of the section                               |
| `c`   | component                | string                                             | the component of the section                              |
| `a`   | capacity                 | int                                                | the capacity of the section                               |
| `q`   | enrollment requirements  | string                                             | the enrollment requirements of the section                |
| `p`   | descriptions             | [SectionDescription](#sectiondescription)[]        | the descriptions of the section                           |
| `o`   | distribution areas       | [DistrosString](#distrosstring)                    | the distribution areas that the section fulfills          |
| `f`   | foundational disciplines | [DisciplinesString](#disciplinesstring)            | the foundational disciplines that the section fulfills    |

### SectionInstructor

_in [ScheduleSection](#schedulesection)_

| Short | Long           | Type   | Description                          |
| ----- | -------------- | ------ | ------------------------------------ |
| `n`   | name           | string | the name of the instructor           |
| `p`   | phone          | string | the phone number of the instructor   |
| `a`   | campus address | string | the campus address of the instructor |
| `o`   | office hours   | string | the office hours of the instructor   |
| `b`   | bio            | string | the bio of the instructor            |
| `u`   | url            | string | the URL of the instructor            |

### Time

_in [ScheduleSection](#schedulesection)_

| Short | Long   | Type | Description         |
| ----- | ------ | ---- | ------------------- |
| `h`   | hour   | int  | hour from 0 to 23   |
| `m`   | minute | int  | minute from 0 to 59 |

### DistrosString

_in [PlanCourse](#plancourse) and [ScheduleSection](#schedulesection)_

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

### DisciplinesString

_in [PlanCourse](#plancourse) and [ScheduleSection](#schedulesection)_

A `DisciplinesString` is a normal string where each character represents a foundational discipline.

| Character | Distribution Area                 |
| --------- | --------------------------------- |
| 1         | Natural Sciences                  |
| 2         | Empirical and Deductive Reasoning |
| 3         | Social and Behavioral Sciences    |
| 4         | Historical Studies                |
| 5         | Ethical and Evaluative Thinking   |
| 6         | Literature and Arts               |
| 7         | Interdisciplinary                 |

For example, the string `"14"` means both the Natural Studies and Historical Studies foundational disciplines are linked to the course.

### MeetingDaysString

_in [ScheduleSection](#schedulesection)_

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

_in [ScheduleSection](#schedulesection)_

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

### ColorString

_in [SubjectInformation](#subjectinformation)_

A `ColorString` is a string that equals one of the following:

- red
- orange
- amber
- yellow
- lime
- green
- emerald
- teal
- cyan
- sky
- blue
- indigo
- violet
- purple
- fuchsia
- pink
- rose
- gray

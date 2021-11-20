### To Do

- [ ] Primary Keys/Foreign Keys
- [ ] Naming Conventions
- [ ] Data Types
- [ ] Relationship Types
- [ ] Design Concepts
- [ ] Entity Relationship Diagrams
- [ ] Breakout: Convert 2 Spreadsheets [15 mins]
- [ ] Spotify ERD

### Primary Keys/Foreign Key

- Want to use number
- if you want, it can string, auto-incrementing number
- FK

* stay away from composite key

### Naming conventions

- Field names/table name should always be snake_case - because SQL is case insentive SELECT sElECT select, 'first name', first_name
- table names are always plural
- Primary keys we use 'id'
- FK singular plus '\_id' 'user_id'

### Data types

- much more of a concern in the old days ~10 years
- when a record is create (even if the record is null) the DB needs to set aside space
- integer, varchar, text, boolean, BLOB(Binary Large Object)
- Phone number? Postal Code? H0H 0H0 - varchar 90210 - varchar 00120 varchar, +1 (604)....

### Relationship (types)

- 3 types of relation

* one - one - one table is only one record related to the one record in the second
* one - many/many - one - this is the most common one you will be using. Artist has album, album has song. author has books
* many - many - 1 or more record in the 1st. We will be using a joining table.

### Design concepts

- Make fields `require` - think about intial state
- Default Values - use intelligent default values to speed up insert
  timestamp = now() or current_date, active boolean field `user_active: true`
  Sum(item.price)
  for...of
  reduce 100x slower
  `first_name` `last_name`
- Calucated fields - enter you `full_name` `first_name` `last_name`
  make a list!
  vancouver
  VANcouvER
  CANVOUEr

1. Toronto
2. Ottawa
3. Victoria

DROP \* WHERE user....

- Try not to delete anything!

### Breakout: Convert Two Spreadsheets

- [Gist with instruction](https://gist.github.com/andydlindsay/20e7305e853bad7b587f294b054cf8de)

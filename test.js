import { exercise } from "./exercise.js";
import chai from 'chai';

//An error will be logged to console if there's a fail
chai.expect(exercise("", 0)).to.eql([]);
chai.expect(exercise("a aaaaa aaaa aaaaaa", 0)).to.eql([]);
chai.expect(exercise("a b c d e", 5)).to.eql([['a', 1], ['b', 1], ['c', 1], ['d', 1], ['e', 1]]);
chai.expect(exercise("", 5)).to.eql([]);
chai.expect(exercise("baz bar foo foo zblah zblah zblah baz toto bar", 3)).to.eql([['zblah', 3], ['bar', 2], ['baz', 2]]);
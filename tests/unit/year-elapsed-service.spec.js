import {expect} from 'chai';
import getYear from 'date-fns/get_year';
import {getSecondsElapsedFrom, getSecondsForYear} from "../../src/components/year-elapsed/YearElapsedService";

describe('YearElapsedService.js', () => {
  it('Check if difference between begin of the year and 10 seconds is correct', () => {
    const currentYear = getYear(new Date());
    const diff = getSecondsElapsedFrom(new Date(currentYear, 0, 1, 0, 0, 10));
    expect(diff).to.be.equals(10000);
  });

  it('Check seconds for year', () => {
    const seconds = getSecondsForYear();
    expect(seconds).to.be.equals(31449600000);
  });

});

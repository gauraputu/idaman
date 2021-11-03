const assert = require('assert');
const proses = require('../public/static/query');
const fs = require('fs');

//variable for testing
var fetchedData = require('./fetchedData.json')
var single_input_format_1,expected_result_single_input_format_1;
var single_input_format_2,expected_result_single_input_format_2;
var multiple_input_format_1,expected_result_multiple_input_format_1;

describe('single input format slot-port divided', function () {

  //read test variable from file, yes it looks ugly for now because 
  //I don't know any other better way to do it, yet.
  before((done)=>{
    fs.readFile(__dirname + '/single_input_format_1.txt', function (err, data) {
      if (err) throw err;
      single_input_format_1 = data.toString();
      done();
    });
  });

  before((done)=>{
    fs.readFile(__dirname + '/expected_result_single_input_format_1.txt', function (err, data) {
      if (err) throw err;
      expected_result_single_input_format_1 = data.toString();
      done();
    });
  });

  before((done)=>{
    fs.readFile(__dirname + '/single_input_format_2.txt', function (err, data) {
      if (err) throw err;
      single_input_format_2 = data.toString();
      done();
    });
  });

  before((done)=>{
    fs.readFile(__dirname + '/expected_result_single_input_format_2.txt', function (err, data) {
      if (err) throw err;
      expected_result_single_input_format_2 = data.toString();
      done();
    });
  });

  before((done)=>{
    fs.readFile(__dirname + '/multiple_input_format_1.txt', function (err, data) {
      if (err) throw err;
      multiple_input_format_1 = data.toString();
      done();
    });
  });

  before((done)=>{
    fs.readFile(__dirname + '/expected_result_multiple_input_format_1.txt', function (err, data) {
      if (err) throw err;
      expected_result_multiple_input_format_1 = data.toString();
      done();
    });
  });

  //run test
  it('single input format 1', function () {
    let result = proses(fetchedData,single_input_format_1);
    assert.equal(result, expected_result_single_input_format_1);
  });
  it('single input format 2', function () {
    let result = proses(fetchedData,single_input_format_2);
    assert.equal(result, expected_result_single_input_format_2);
  });
  it('multiple input format 1', function () {
    let result = proses(fetchedData,multiple_input_format_1);
    assert.equal(result, expected_result_multiple_input_format_1);
  });

});

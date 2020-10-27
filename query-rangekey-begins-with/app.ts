/// <reference path="Scripts/typings/tsd.d.ts" />
"use strict";

import Joi = require("joi");
import _ = require("lodash");

var vogels = require("vogels");
var util = require("util");

vogels.AWS.config.update({ region: "eu-west-1", signatureVersion: "v4" });

var answersAggregated = vogels.define("Answers-Aggregated", {
  tableName: util.format("ohid-answers-aggregated-%s", "dev"),

  hashKey: "tenantId",
  rangeKey: "surveyIdDemographicAnswer",

  timestamps: true,

  schema: {
    tenantId: vogels.types.uuid(),
    surveyIdDemographicAnswer: Joi.string().regex(/^[a-f0-9]{40}\.\w+$/), // sha1 + Demographic question code + answer
    answersAggregated: Joi.object().pattern(/\w/, Joi.object().pattern(/\d+/, Joi.number()))
  }
});

var keys = [
  "DE01.0",
  "DE01.1",
  "DE01.2",
  "DE01.3",
  "DE01.4",
  "DE01.5",
  "DE02.0",
  "DE02.1",
  "DE02.2",
  "DE02.3",
  "DE02.4",
  "DE02.5",
  "DE03.0",
  "DE03.1",
  "DE03.10",
  "DE03.11",
  "DE03.12",
  "DE03.13",
  "DE03.14",
  "DE03.15",
  "DE03.16",
  "DE03.17",
  "DE03.18",
  "DE03.19",
  "DE03.2",
  "DE03.20",
  "DE03.21",
  "DE03.22",
  "DE03.23",
  "DE03.24",
  "DE03.3",
  "DE03.4",
  "DE03.5",
  "DE03.6",
  "DE03.7",
  "DE03.8",
  "DE03.9",
  "DE04.0",
  "DE04.1",
  "DE04.10",
  "DE04.100",
  "DE04.101",
  "DE04.102",
  "DE04.103",
  "DE04.104",
  "DE04.105",
  "DE04.106",
  "DE04.107",
  "DE04.108",
  "DE04.109",
  "DE04.11",
  "DE04.110",
  "DE04.111",
  "DE04.112",
  "DE04.113",
  "DE04.114",
  "DE04.115",
  "DE04.116",
  "DE04.117",
  "DE04.118",
  "DE04.119",
  "DE04.12",
  "DE04.120",
  "DE04.121",
  "DE04.122",
  "DE04.123",
  "DE04.124",
  "DE04.125",
  "DE04.126",
  "DE04.127",
  "DE04.128",
  "DE04.129",
  "DE04.13",
  "DE04.130",
  "DE04.131",
  "DE04.132",
  "DE04.133",
  "DE04.134",
  "DE04.135",
  "DE04.136",
  "DE04.137",
  "DE04.138",
  "DE04.139",
  "DE04.14",
  "DE04.140",
  "DE04.141",
  "DE04.142",
  "DE04.143",
  "DE04.144",
  "DE04.145",
  "DE04.146",
  "DE04.147",
  "DE04.148",
  "DE04.149",
  "DE04.15",
  "DE04.150",
  "DE04.151",
  "DE04.152",
  "DE04.153",
  "DE04.154",
  "DE04.155",
  "DE04.156",
  "DE04.157",
  "DE04.158",
  "DE04.159",
  "DE04.16",
  "DE04.160",
  "DE04.161",
  "DE04.162",
  "DE04.163",
  "DE04.164",
  "DE04.165",
  "DE04.166",
  "DE04.167",
  "DE04.168",
  "DE04.169",
  "DE04.17",
  "DE04.170",
  "DE04.171",
  "DE04.172",
  "DE04.173",
  "DE04.174",
  "DE04.175",
  "DE04.176",
  "DE04.177",
  "DE04.178",
  "DE04.179",
  "DE04.18",
  "DE04.180",
  "DE04.181",
  "DE04.182",
  "DE04.183",
  "DE04.184",
  "DE04.185",
  "DE04.186",
  "DE04.187",
  "DE04.188",
  "DE04.189",
  "DE04.19",
  "DE04.190",
  "DE04.191",
  "DE04.192",
  "DE04.193",
  "DE04.2",
  "DE04.20",
  "DE04.21",
  "DE04.22",
  "DE04.23",
  "DE04.24",
  "DE04.25",
  "DE04.26",
  "DE04.27",
  "DE04.28",
  "DE04.29",
  "DE04.3",
  "DE04.30",
  "DE04.31",
  "DE04.32",
  "DE04.33",
  "DE04.34",
  "DE04.35",
  "DE04.36",
  "DE04.37",
  "DE04.38",
  "DE04.39",
  "DE04.4",
  "DE04.40",
  "DE04.41",
  "DE04.42",
  "DE04.43",
  "DE04.44",
  "DE04.45",
  "DE04.46",
  "DE04.47",
  "DE04.48",
  "DE04.49",
  "DE04.5",
  "DE04.50",
  "DE04.51",
  "DE04.52",
  "DE04.53",
  "DE04.54",
  "DE04.55",
  "DE04.56",
  "DE04.57",
  "DE04.58",
  "DE04.59",
  "DE04.6",
  "DE04.60",
  "DE04.61",
  "DE04.62",
  "DE04.63",
  "DE04.64",
  "DE04.65",
  "DE04.66",
  "DE04.67",
  "DE04.68",
  "DE04.69",
  "DE04.7",
  "DE04.70",
  "DE04.71",
  "DE04.72",
  "DE04.73",
  "DE04.74",
  "DE04.75",
  "DE04.76",
  "DE04.77",
  "DE04.78",
  "DE04.79",
  "DE04.8",
  "DE04.80",
  "DE04.81",
  "DE04.82",
  "DE04.83",
  "DE04.84",
  "DE04.85",
  "DE04.86",
  "DE04.87",
  "DE04.88",
  "DE04.89",
  "DE04.9",
  "DE04.90",
  "DE04.91",
  "DE04.92",
  "DE04.93",
  "DE04.94",
  "DE04.95",
  "DE04.96",
  "DE04.97",
  "DE04.98",
  "DE04.99"
];

function makeAttributeValue(key: string)
{
  return ":" + key.replace(".", "");
}

// create chunks
var chunks: string[][] = (<any>_).chunk(keys, 99); // for some reason 100 is too much, even though the documenation states a max of 100

for (var x = 0; x < chunks.length; x++)
{
  console.log(chunks[x].length);
}

var filterExpressions: string[] = [];

// for each chunk we create a filter expression part
for (var x = 0; x < chunks.length; x++)
{
  var fe = [];

  for (var y = 0; y < chunks[x].length; y++)
  {
    fe.push(makeAttributeValue(chunks[x][y]));
  }

  filterExpressions.push("demographicAnswer IN (" + fe.join(", ") + ")");
}

var expressionAttributeValues = {};

for (x = 0; x < keys.length; x++)
{
  expressionAttributeValues[makeAttributeValue(keys[x])] = keys[x];
}

var query = answersAggregated
  .query("3a8567af-e81b-47e7-a921-85711e800e6a")
  .where("surveyIdDemographicAnswer").beginsWith("a94a8fe5ccb19ba61c4c0873d391e987982fbbd3")
  .filterExpression(filterExpressions.join(" OR "))
  .expressionAttributeValues(expressionAttributeValues)
  .loadAll();

query.exec((error: any, data: any) =>
{
  if (error)
  {
    console.log(error);
  }
  else
  {
    for (var x = 0; x < data.Items.length; x++)
    {
      console.log("\"" + data.Items[x].attrs.demographicAnswer + "\", ");
    }
  }
});

///// <reference path="Scripts/typings/tsd.d.ts" />
//"use strict";

//import Joi = require("joi");
//import _ = require("lodash");

//var AWS = require("aws-sdk");
//var util = require("util");

//AWS.config.update({ region: "eu-west-1", signatureVersion: "v4" });

//var ddb = new AWS.DynamoDB();

//ddb.query({
//  TableName: "ohid-answers-aggregated-dev",
//  KeyConditionExpression: "tenantId = :tenantId AND (begins_with(surveyIdDemographicAnswer, :de011) OR begins_with(surveyIdDemographicAnswer, :de012))",
//  ExpressionAttributeValues: {
//    ":tenantId": { "S": "3a8567af-e81b-47e7-a921-85711e800e6a" },
//    ":de011": { "S": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3.DE011"},
//    ":de012": { "S": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3.DE012"}
//  }
//}, (error: any, data: any) =>
//{
//  if (error)
//  {
//    console.log(error);
//  }
//  else
//  {
//    console.log(data);
//  }
//});
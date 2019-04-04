export default {
   "@type": ".Game",
   "id": "V4_2019-04-04_51_3",
   "status": "results",
   "pools": {
      "V4": {
         "@type": ".MarkingBetPool",
         "id": "V4_2019-04-04_51_3",
         "status": "results",
         "timestamp": "2019-04-04 11:42:41",
         "turnover": 6879000,
         "harry": false,
         "systemCount": 3266,
         "potentialPayoutRaceId": "2019-04-04_51_6",
         "result": {
            "@type": ".MarkingBetResult",
            "payouts": {
               "4": {
                  "systems": 205,
                  "payout": 25100
               }
            }
         }
      }
   },
   "races": [
      {
         "id": "2019-04-04_51_3",
         "name": "Penrith - Passgångslopp",
         "date": "2019-04-04",
         "number": 3,
         "distance": 1720,
         "startMethod": "auto",
         "startTime": "2019-04-04T10:03:38",
         "scheduledStartTime": "2019-04-04T10:03:00",
         "prize": "6120 (Pris i AUD)",
         "terms": [
            "Alla."
         ],
         "sport": "trot",
         "track": {
            "id": 51,
            "name": "Penrith - AUS",
            "countryCode": "AU"
         },
         "result": {},
         "status": "results",
         "mediaId": "314205765377",
         "pools": {
            "vinnare": {
               "@type": ".VinnarePool",
               "id": "vinnare_2019-04-04_51_3",
               "status": "results",
               "timestamp": "2019-04-04 10:12:36",
               "turnover": 5104400,
               "result": {
                  "@type": ".VinnarePoolRaceResult",
                  "winners": [
                     {
                        "number": 5,
                        "odds": 120
                     }
                  ]
               }
            },
            "plats": {
               "@type": ".PlatsPool",
               "id": "plats_2019-04-04_51_3",
               "status": "results",
               "timestamp": "2019-04-04 10:12:36",
               "turnover": 2280500,
               "result": {
                  "@type": ".PlatsPoolRaceResult",
                  "winners": {
                     "first": [
                        {
                           "number": 5,
                           "odds": 104
                        }
                     ],
                     "second": [
                        {
                           "number": 1,
                           "odds": 120
                        }
                     ],
                     "third": [
                        {
                           "number": 8,
                           "odds": 250
                        }
                     ]
                  }
               }
            },
            "tvilling": {
               "@type": ".TvillingPool",
               "id": "tvilling_2019-04-04_51_3",
               "status": "results",
               "timestamp": "2019-04-04 10:12:36",
               "turnover": 1567000,
               "result": {
                  "@type": ".TvillingPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           5,
                           1
                        ],
                        "odds": 240
                     }
                  ]
               }
            },
            "trio": {
               "@type": ".TrioPool",
               "id": "trio_2019-04-04_51_3",
               "status": "results",
               "timestamp": "2019-04-04 10:12:36",
               "turnover": 271600,
               "result": {
                  "@type": ".TrioPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           5,
                           1,
                           8
                        ],
                        "odds": 1250
                     }
                  ]
               }
            },
            "V4": {
               "@type": ".Pool",
               "result": {
                  "@type": ".MarkingBetRacePoolResult",
                  "value": {
                     "amount": 1600
                  },
                  "winners": [
                     5
                  ],
                  "reserveOrder": [
                     5,
                     1,
                     4,
                     6,
                     8,
                     10,
                     3,
                     9,
                     7,
                     2
                  ],
                  "systems": "3062"
               }
            }
         },
         "starts": [
            {
               "number": 1,
               "postPosition": 1,
               "distance": 1720,
               "horse": {
                  "name": "Lani Kai Beach",
                  "age": 6,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "I C",
                     "lastName": "Wilson",
                     "shortName": "Wil IC",
                     "license": "Okänd"
                  },
                  "money": 271643,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 37,
                           "earnings": 13927800,
                           "placement": {
                              "1": 4,
                              "2": 1,
                              "3": 6
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 31,
                           "earnings": 7864100,
                           "placement": {
                              "1": 2,
                              "2": 4,
                              "3": 9
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 90,
                        "earnings": 27164300,
                        "placement": {
                           "1": 7,
                           "2": 7,
                           "3": 16
                        },
                        "records": [],
                        "winPercentage": 777,
                        "placePercentage": 3333,
                        "earningsPerStart": 301825,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2200
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Camlach"
                     },
                     "mother": {
                        "name": "Popular Beach"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "J N",
                  "lastName": "Douglass",
                  "shortName": "Dou JN",
                  "license": "Okänd",
                  "silks": "mörk blå, ljus blå hästsko & ärmar"
               },
               "result": {
                  "place": 2,
                  "finalOdds": 6.3,
                  "startNumber": 1
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 630
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 120
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1091
                  }
               }
            },
            {
               "number": 2,
               "postPosition": 2,
               "distance": 1720,
               "horse": {
                  "name": "The Bellum",
                  "age": 7,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "Renata",
                     "lastName": "Furina",
                     "shortName": "Fur Re",
                     "license": "Okänd"
                  },
                  "money": 153418,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 20,
                           "earnings": 4742900,
                           "placement": {
                              "1": 1,
                              "2": 2,
                              "3": 1
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 16,
                           "earnings": 4004700,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 73,
                        "earnings": 15341800,
                        "placement": {
                           "1": 4,
                           "2": 6,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 547,
                        "placePercentage": 1643,
                        "earningsPerStart": 210161,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 5350
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Union Guy"
                     },
                     "mother": {
                        "name": "Blue Scotch"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Renata",
                  "lastName": "Furina",
                  "shortName": "Fur Re",
                  "license": "Okänd",
                  "silks": "hot rosa, lila w & p, guld star, purpl"
               },
               "result": {
                  "finalOdds": 26.6,
                  "startNumber": 2
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 2660
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 69
                  }
               }
            },
            {
               "number": 3,
               "postPosition": 3,
               "distance": 1720,
               "horse": {
                  "name": "Luke By Knight",
                  "age": 8,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "A P",
                     "lastName": "Cassar",
                     "shortName": "Cas AP",
                     "license": "Okänd"
                  },
                  "money": 151977,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 3,
                           "earnings": 2089800,
                           "placement": {
                              "1": 1,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 12,
                           "earnings": 3044600,
                           "placement": {
                              "1": 1,
                              "2": 0,
                              "3": 1
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 51,
                        "earnings": 15197700,
                        "placement": {
                           "1": 4,
                           "2": 7,
                           "3": 3
                        },
                        "records": [],
                        "winPercentage": 784,
                        "placePercentage": 2745,
                        "earningsPerStart": 297994,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 3250
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Live Or Die"
                     },
                     "mother": {
                        "name": "Charming Knight"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Lachie",
                  "lastName": "Manzelmann",
                  "shortName": "Man La",
                  "license": "Okänd",
                  "silks": "röd, guld kors of lorraine, röd med go"
               },
               "result": {
                  "finalOdds": 52.2,
                  "startNumber": 3
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 5220
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 139
                  }
               }
            },
            {
               "number": 4,
               "postPosition": 4,
               "distance": 1720,
               "horse": {
                  "name": "Clementsorrell",
                  "age": 8,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "D S",
                     "lastName": "Waite",
                     "shortName": "Wai DS",
                     "license": "Okänd"
                  },
                  "money": 623967,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 39,
                           "earnings": 13484100,
                           "placement": {
                              "1": 3,
                              "2": 6,
                              "3": 6
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 29,
                           "earnings": 8799700,
                           "placement": {
                              "1": 3,
                              "2": 3,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 150,
                        "earnings": 62396700,
                        "placement": {
                           "1": 18,
                           "2": 25,
                           "3": 21
                        },
                        "records": [],
                        "winPercentage": 1200,
                        "placePercentage": 4266,
                        "earningsPerStart": 415978,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1051
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Totally Ruthless"
                     },
                     "mother": {
                        "name": "Im Helen Laura"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "W H",
                  "lastName": "Rixon",
                  "shortName": "Rix WH",
                  "license": "Okänd",
                  "silks": "mörk grön, gul prick, randiga ärmar"
               },
               "result": {
                  "finalOdds": 15.8,
                  "startNumber": 4
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1580
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 601
                  }
               }
            },
            {
               "number": 5,
               "postPosition": 5,
               "distance": 1720,
               "horse": {
                  "name": "Vinny Gambini",
                  "age": 5,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "K J",
                     "lastName": "Pizzuto",
                     "shortName": "Piz KJ",
                     "license": "Okänd"
                  },
                  "money": 136911,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 11,
                           "earnings": 8518000,
                           "placement": {
                              "1": 2,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 3,
                           "earnings": 413400,
                           "placement": {
                              "1": 1,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 18,
                        "earnings": 13691100,
                        "placement": {
                           "1": 4,
                           "2": 3,
                           "3": 0
                        },
                        "records": [],
                        "winPercentage": 2222,
                        "placePercentage": 3888,
                        "earningsPerStart": 760616,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1430
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Vintage Master"
                     },
                     "mother": {
                        "name": "For The Don"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "T P",
                  "lastName": "Mccarthy",
                  "shortName": "Mcc TP",
                  "license": "Okänd",
                  "silks": "svart, vit maltese kors, vit bågad"
               },
               "result": {
                  "place": 1,
                  "finalOdds": 1.2,
                  "startNumber": 5
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 120,
                     "finalOdds": 120
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 104
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 6947
                  }
               }
            },
            {
               "number": 6,
               "postPosition": 6,
               "distance": 1720,
               "horse": {
                  "name": "All Positive",
                  "age": 8,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "J A",
                     "lastName": "Rando, M J Rando",
                     "shortName": "Ran JA",
                     "license": "Okänd"
                  },
                  "money": 102497,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 19,
                           "earnings": 7471800,
                           "placement": {
                              "1": 2,
                              "2": 3,
                              "3": 2
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 15,
                           "earnings": 1948300,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 47,
                        "earnings": 10249700,
                        "placement": {
                           "1": 3,
                           "2": 4,
                           "3": 4
                        },
                        "records": [],
                        "winPercentage": 638,
                        "placePercentage": 2340,
                        "earningsPerStart": 218078,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 3933
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Armbro Operative"
                     },
                     "mother": {
                        "name": "Shootin Blanks"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "D R",
                  "lastName": "Morris",
                  "shortName": "Mor DR",
                  "license": "Okänd",
                  "silks": "mörk blå, orange ok, band & ärmar"
               },
               "result": {
                  "finalOdds": 68,
                  "startNumber": 6
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 6800
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 475
                  }
               }
            },
            {
               "number": 7,
               "postPosition": 9,
               "distance": 1720,
               "horse": {
                  "name": "The Pix",
                  "age": 8,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "J J",
                     "lastName": "Niass",
                     "shortName": "Nia JJ",
                     "license": "Okänd"
                  },
                  "money": 693323,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 20,
                           "earnings": 5857900,
                           "placement": {
                              "1": 1,
                              "2": 5,
                              "3": 3
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 28,
                           "earnings": 8510300,
                           "placement": {
                              "1": 2,
                              "2": 3,
                              "3": 4
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 142,
                        "earnings": 69332300,
                        "placement": {
                           "1": 15,
                           "2": 18,
                           "3": 21
                        },
                        "records": [],
                        "winPercentage": 1056,
                        "placePercentage": 3802,
                        "earningsPerStart": 488255,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2750
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Modern Art"
                     },
                     "mother": {
                        "name": "Lucy Woods"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "G W",
                  "lastName": "Mcelhinney",
                  "shortName": "Mce GW",
                  "license": "Okänd",
                  "silks": "mörk blå, röd ok & band, mörk blå "
               },
               "result": {
                  "finalOdds": 74.6,
                  "startNumber": 7
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 7460
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 88
                  }
               }
            },
            {
               "number": 8,
               "postPosition": 10,
               "distance": 1720,
               "horse": {
                  "name": "Sals Luck",
                  "age": 6,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "D S",
                     "lastName": "Waite",
                     "shortName": "Wai DS",
                     "license": "Okänd"
                  },
                  "money": 160722,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 20,
                           "earnings": 5353100,
                           "placement": {
                              "1": 2,
                              "2": 2,
                              "3": 1
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 25,
                           "earnings": 10719100,
                           "placement": {
                              "1": 4,
                              "2": 4,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 45,
                        "earnings": 16072200,
                        "placement": {
                           "1": 6,
                           "2": 6,
                           "3": 3
                        },
                        "records": [],
                        "winPercentage": 1333,
                        "placePercentage": 3333,
                        "earningsPerStart": 357160,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1223
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Ifihadyourluck"
                     },
                     "mother": {
                        "name": "Salinelle"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Cameron",
                  "lastName": "Hart",
                  "shortName": "Har Ca",
                  "license": "Okänd",
                  "silks": "mörk grön, vit tab logo"
               },
               "result": {
                  "place": 3,
                  "finalOdds": 22.3,
                  "startNumber": 8
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 2230
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 250
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 262
                  }
               }
            },
            {
               "number": 9,
               "postPosition": 11,
               "distance": 1720,
               "horse": {
                  "name": "Art I Special",
                  "age": 10,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "P H",
                     "lastName": "Rixon",
                     "shortName": "Rix PH",
                     "license": "Okänd"
                  },
                  "money": 511888,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 30,
                           "earnings": 9241400,
                           "placement": {
                              "1": 2,
                              "2": 2,
                              "3": 4
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 23,
                           "earnings": 5992900,
                           "placement": {
                              "1": 1,
                              "2": 2,
                              "3": 4
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 134,
                        "earnings": 51188800,
                        "placement": {
                           "1": 11,
                           "2": 19,
                           "3": 16
                        },
                        "records": [],
                        "winPercentage": 820,
                        "placePercentage": 3432,
                        "earningsPerStart": 382005,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2366
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Artsplace"
                     },
                     "mother": {
                        "name": "Vicario"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "W H",
                  "lastName": "Rixon",
                  "shortName": "Rix WH",
                  "license": "Okänd",
                  "silks": "orange, mörk grön maltese kors & ärmar"
               },
               "result": {
                  "finalOdds": 58.1,
                  "startNumber": 9
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 5810
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 105
                  }
               }
            },
            {
               "number": 10,
               "postPosition": 12,
               "distance": 1720,
               "horse": {
                  "name": "Bara Jayla",
                  "age": 5,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "F J",
                     "lastName": "Knapton",
                     "shortName": "Kna FJ",
                     "license": "Okänd"
                  },
                  "money": 97198,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 14,
                           "earnings": 4331300,
                           "placement": {
                              "1": 1,
                              "2": 2,
                              "3": 1
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 9,
                           "earnings": 244300,
                           "placement": {
                              "1": 2,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 46,
                        "earnings": 9719800,
                        "placement": {
                           "1": 3,
                           "2": 7,
                           "3": 8
                        },
                        "records": [],
                        "winPercentage": 652,
                        "placePercentage": 3913,
                        "earningsPerStart": 211300,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 3075
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Santanna Blue Chip"
                     },
                     "mother": {
                        "name": "Bara Ingrid"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "M B",
                  "lastName": "Towers",
                  "shortName": "Tow MB",
                  "license": "Okänd",
                  "silks": "ljus grön, mörk grön korsade band, "
               },
               "result": {
                  "finalOdds": 36.5,
                  "startNumber": 10
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 3650
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 223
                  }
               }
            }
         ]
      },
      {
         "id": "2019-04-04_51_4",
         "name": "Penrith - Passgångslopp",
         "date": "2019-04-04",
         "number": 4,
         "distance": 2125,
         "startMethod": "auto",
         "startTime": "2019-04-04T10:34:09",
         "scheduledStartTime": "2019-04-04T10:33:00",
         "prize": "6120 (Pris i AUD)",
         "terms": [
            "Alla."
         ],
         "sport": "trot",
         "track": {
            "id": 51,
            "name": "Penrith - AUS",
            "countryCode": "AU"
         },
         "result": {},
         "status": "results",
         "mediaId": "314223173225",
         "pools": {
            "vinnare": {
               "@type": ".VinnarePool",
               "id": "vinnare_2019-04-04_51_4",
               "status": "results",
               "timestamp": "2019-04-04 10:40:51",
               "turnover": 7682600,
               "result": {
                  "@type": ".VinnarePoolRaceResult",
                  "winners": [
                     {
                        "number": 7,
                        "odds": 230
                     }
                  ]
               }
            },
            "plats": {
               "@type": ".PlatsPool",
               "id": "plats_2019-04-04_51_4",
               "status": "results",
               "timestamp": "2019-04-04 10:40:51",
               "turnover": 2203100,
               "result": {
                  "@type": ".PlatsPoolRaceResult",
                  "winners": {
                     "first": [
                        {
                           "number": 7,
                           "odds": 104
                        }
                     ],
                     "second": [
                        {
                           "number": 1,
                           "odds": 260
                        }
                     ],
                     "third": [
                        {
                           "number": 2,
                           "odds": 370
                        }
                     ]
                  }
               }
            },
            "tvilling": {
               "@type": ".TvillingPool",
               "id": "tvilling_2019-04-04_51_4",
               "status": "results",
               "timestamp": "2019-04-04 10:40:52",
               "turnover": 1841600,
               "result": {
                  "@type": ".TvillingPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           7,
                           1
                        ],
                        "odds": 470
                     }
                  ]
               }
            },
            "trio": {
               "@type": ".TrioPool",
               "id": "trio_2019-04-04_51_4",
               "status": "results",
               "timestamp": "2019-04-04 10:40:52",
               "turnover": 297800,
               "result": {
                  "@type": ".TrioPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           7,
                           1,
                           2
                        ],
                        "odds": 5390
                     }
                  ]
               }
            },
            "V4": {
               "@type": ".Pool",
               "result": {
                  "@type": ".MarkingBetRacePoolResult",
                  "value": {
                     "amount": 2000
                  },
                  "winners": [
                     7
                  ],
                  "reserveOrder": [
                     7,
                     4,
                     8,
                     1,
                     5,
                     2,
                     6,
                     3
                  ],
                  "systems": "2523"
               }
            }
         },
         "starts": [
            {
               "number": 1,
               "postPosition": 1,
               "distance": 2125,
               "horse": {
                  "name": "Simply Clever",
                  "age": 5,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "D S",
                     "lastName": "Waite",
                     "shortName": "Wai DS",
                     "license": "Okänd"
                  },
                  "money": 368482,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 22,
                           "earnings": 12757500,
                           "placement": {
                              "1": 3,
                              "2": 8,
                              "3": 2
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 29,
                           "earnings": 8079500,
                           "placement": {
                              "1": 4,
                              "2": 1,
                              "3": 8
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 63,
                        "earnings": 36848200,
                        "placement": {
                           "1": 13,
                           "2": 10,
                           "3": 11
                        },
                        "records": [],
                        "winPercentage": 2063,
                        "placePercentage": 5396,
                        "earningsPerStart": 584892,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1480
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Santanna Blue Chip"
                     },
                     "mother": {
                        "name": "Seldom Home"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Cameron",
                  "lastName": "Hart",
                  "shortName": "Har Ca",
                  "license": "Okänd",
                  "silks": "mörk grön, gul prick, randiga ärmar"
               },
               "result": {
                  "place": 2,
                  "finalOdds": 8.9,
                  "startNumber": 1
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 890
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 260
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1439
                  }
               }
            },
            {
               "number": 2,
               "postPosition": 2,
               "distance": 2125,
               "horse": {
                  "name": "Aintnobettor",
                  "age": 4,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "A S",
                     "lastName": "Turnbull",
                     "shortName": "Tur AS",
                     "license": "Okänd"
                  },
                  "money": 258236,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 11,
                           "earnings": 7606900,
                           "placement": {
                              "1": 1,
                              "2": 3,
                              "3": 2
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 11,
                           "earnings": 18216700,
                           "placement": {
                              "1": 4,
                              "2": 3,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 22,
                        "earnings": 25823600,
                        "placement": {
                           "1": 5,
                           "2": 6,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 2272,
                        "placePercentage": 5909,
                        "earningsPerStart": 1173800,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 991
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Bettors Delight"
                     },
                     "mother": {
                        "name": "Aintshegreat"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "I L",
                  "lastName": "Ross",
                  "shortName": "Ros IL",
                  "license": "Okänd",
                  "silks": "vit, rainbow band"
               },
               "result": {
                  "place": 3,
                  "finalOdds": 16.1,
                  "startNumber": 2
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1610
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 370
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 677
                  }
               }
            },
            {
               "number": 3,
               "postPosition": 3,
               "distance": 2125,
               "horse": {
                  "name": "Little Change",
                  "age": 6,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "R J",
                     "lastName": "Alchin",
                     "shortName": "Alc RJ",
                     "license": "Okänd"
                  },
                  "money": 263155,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 34,
                           "earnings": 11591700,
                           "placement": {
                              "1": 4,
                              "2": 3,
                              "3": 7
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 9,
                           "earnings": 2326400,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 84,
                        "earnings": 26315500,
                        "placement": {
                           "1": 8,
                           "2": 8,
                           "3": 13
                        },
                        "records": [],
                        "winPercentage": 952,
                        "placePercentage": 3452,
                        "earningsPerStart": 313279,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 6058
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Changeover"
                     },
                     "mother": {
                        "name": "Spirit Of Georget"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "R J",
                  "lastName": "Alchin",
                  "shortName": "Alc RJ",
                  "license": "Okänd",
                  "silks": "rosa, mörk blå korsade band"
               },
               "result": {
                  "finalOdds": 60.8,
                  "startNumber": 3
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 6080
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 226
                  }
               }
            },
            {
               "number": 4,
               "postPosition": 4,
               "distance": 2125,
               "horse": {
                  "name": "Sam Is Perfection",
                  "age": 5,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "P R",
                     "lastName": "J Fitzpatrick",
                     "shortName": "J f PR",
                     "license": "Okänd"
                  },
                  "money": 157572,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 6,
                           "earnings": 2086500,
                           "placement": {
                              "1": 0,
                              "2": 2,
                              "3": 1
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 16,
                           "earnings": 7716200,
                           "placement": {
                              "1": 4,
                              "2": 3,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 40,
                        "earnings": 15757200,
                        "placement": {
                           "1": 5,
                           "2": 9,
                           "3": 6
                        },
                        "records": [],
                        "winPercentage": 1250,
                        "placePercentage": 5000,
                        "earningsPerStart": 393930,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1215
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Pay Me Christian"
                     },
                     "mother": {
                        "name": "Robyn Oh Robyn"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "G J",
                  "lastName": "Fitzpatrick",
                  "shortName": "Fit GJ",
                  "license": "Okänd",
                  "silks": "mörk grön, gul diagonal ränder"
               },
               "result": {
                  "finalOdds": 6.6,
                  "startNumber": 4
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 660
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1704
                  }
               }
            },
            {
               "number": 5,
               "postPosition": 5,
               "distance": 2125,
               "horse": {
                  "name": "The Maldives",
                  "age": 7,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "I C",
                     "lastName": "Wilson",
                     "shortName": "Wil IC",
                     "license": "Okänd"
                  },
                  "money": 404973,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 32,
                           "earnings": 10777000,
                           "placement": {
                              "1": 2,
                              "2": 3,
                              "3": 7
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 24,
                           "earnings": 9175800,
                           "placement": {
                              "1": 3,
                              "2": 2,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 100,
                        "earnings": 40497300,
                        "placement": {
                           "1": 11,
                           "2": 12,
                           "3": 11
                        },
                        "records": [],
                        "winPercentage": 1100,
                        "placePercentage": 3400,
                        "earningsPerStart": 404973,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2683
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Tinted Cloud"
                     },
                     "mother": {
                        "name": "Popular Beach"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "J N",
                  "lastName": "Douglass",
                  "shortName": "Dou JN",
                  "license": "Okänd",
                  "silks": "mörk blå, ljus blå hästsko & ärmar"
               },
               "result": {
                  "finalOdds": 42.4,
                  "startNumber": 5
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 4240
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 944
                  }
               }
            },
            {
               "number": 6,
               "postPosition": 6,
               "distance": 2125,
               "horse": {
                  "name": "Burning Rubber",
                  "age": 5,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "B P",
                     "lastName": "Fitzpatrick",
                     "shortName": "Fit BP",
                     "license": "Okänd"
                  },
                  "money": 190411,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 12,
                           "earnings": 5398700,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 12,
                           "earnings": 9018900,
                           "placement": {
                              "1": 4,
                              "2": 2,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 28,
                        "earnings": 19041100,
                        "placement": {
                           "1": 6,
                           "2": 4,
                           "3": 3
                        },
                        "records": [],
                        "winPercentage": 2142,
                        "placePercentage": 4642,
                        "earningsPerStart": 680039,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 693
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Mach Three"
                     },
                     "mother": {
                        "name": "Lady Valentia"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "J E",
                  "lastName": "Trainor",
                  "shortName": "Tra JE",
                  "license": "Okänd",
                  "silks": "vit, mörk grön ok and band, yello"
               },
               "result": {
                  "finalOdds": 16.2,
                  "startNumber": 6
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1620
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 582
                  }
               }
            },
            {
               "number": 7,
               "postPosition": 9,
               "distance": 2125,
               "horse": {
                  "name": "Persimmon",
                  "age": 5,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "K J",
                     "lastName": "Pizzuto",
                     "shortName": "Piz KJ",
                     "license": "Okänd"
                  },
                  "money": 402626,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 24,
                           "earnings": 20023600,
                           "placement": {
                              "1": 3,
                              "2": 7,
                              "3": 6
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 8,
                           "earnings": 4276000,
                           "placement": {
                              "1": 4,
                              "2": 3,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 55,
                        "earnings": 40262600,
                        "placement": {
                           "1": 11,
                           "2": 14,
                           "3": 13
                        },
                        "records": [],
                        "winPercentage": 2000,
                        "placePercentage": 6909,
                        "earningsPerStart": 732047,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 306
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Courage Under Fire"
                     },
                     "mother": {
                        "name": "Soho Bordeaux"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "T P",
                  "lastName": "Mccarthy",
                  "shortName": "Mcc TP",
                  "license": "Okänd",
                  "silks": "svart, vit maltese kors, vit bågad"
               },
               "result": {
                  "place": 1,
                  "finalOdds": 2.3,
                  "startNumber": 7
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 230,
                     "finalOdds": 230
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 104
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 2816
                  }
               }
            },
            {
               "number": 8,
               "postPosition": 10,
               "distance": 2125,
               "horse": {
                  "name": "Bettor To Be Tricky",
                  "age": 5,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "K A",
                     "lastName": "Turner",
                     "shortName": "Tur KA",
                     "license": "Okänd"
                  },
                  "money": 361242,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 16,
                           "earnings": 18198100,
                           "placement": {
                              "1": 5,
                              "2": 2,
                              "3": 4
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 20,
                           "earnings": 7388900,
                           "placement": {
                              "1": 2,
                              "2": 6,
                              "3": 4
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 55,
                        "earnings": 36124200,
                        "placement": {
                           "1": 8,
                           "2": 10,
                           "3": 15
                        },
                        "records": [],
                        "winPercentage": 1454,
                        "placePercentage": 6000,
                        "earningsPerStart": 656803,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 646
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Bettor'S Delight"
                     },
                     "mother": {
                        "name": "Tricky Woman"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "K A",
                  "lastName": "Turner",
                  "shortName": "Tur KA",
                  "license": "Okänd",
                  "silks": "svart, orange seams"
               },
               "result": {
                  "finalOdds": 3.2,
                  "startNumber": 8
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 320
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1613
                  }
               }
            }
         ]
      },
      {
         "id": "2019-04-04_51_5",
         "name": "Penrith - Passgångslopp",
         "date": "2019-04-04",
         "number": 5,
         "distance": 1720,
         "startMethod": "auto",
         "startTime": "2019-04-04T11:07:48",
         "scheduledStartTime": "2019-04-04T11:03:00",
         "prize": "4500 (Pris i AUD)",
         "terms": [
            "Alla."
         ],
         "sport": "trot",
         "track": {
            "id": 51,
            "name": "Penrith - AUS",
            "countryCode": "AU"
         },
         "result": {
            "scratchings": [
               10
            ]
         },
         "status": "results",
         "mediaId": "314240069331",
         "pools": {
            "vinnare": {
               "@type": ".VinnarePool",
               "id": "vinnare_2019-04-04_51_5",
               "status": "results",
               "timestamp": "2019-04-04 11:16:20",
               "turnover": 6789600,
               "result": {
                  "@type": ".VinnarePoolRaceResult",
                  "winners": [
                     {
                        "number": 4,
                        "odds": 1000
                     }
                  ]
               }
            },
            "plats": {
               "@type": ".PlatsPool",
               "id": "plats_2019-04-04_51_5",
               "status": "results",
               "timestamp": "2019-04-04 11:16:20",
               "turnover": 2290200,
               "result": {
                  "@type": ".PlatsPoolRaceResult",
                  "winners": {
                     "first": [
                        {
                           "number": 4,
                           "odds": 260
                        }
                     ],
                     "second": [
                        {
                           "number": 1,
                           "odds": 200
                        }
                     ],
                     "third": [
                        {
                           "number": 8,
                           "odds": 140
                        }
                     ]
                  }
               }
            },
            "tvilling": {
               "@type": ".TvillingPool",
               "id": "tvilling_2019-04-04_51_5",
               "status": "results",
               "timestamp": "2019-04-04 11:16:21",
               "turnover": 1624400,
               "result": {
                  "@type": ".TvillingPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           4,
                           1
                        ],
                        "odds": 4870
                     }
                  ]
               }
            },
            "trio": {
               "@type": ".TrioPool",
               "id": "trio_2019-04-04_51_5",
               "status": "results",
               "timestamp": "2019-04-04 11:16:21",
               "turnover": 336300,
               "result": {
                  "@type": ".TrioPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           4,
                           1,
                           8
                        ],
                        "odds": 32330
                     }
                  ]
               }
            },
            "V4": {
               "@type": ".Pool",
               "result": {
                  "@type": ".MarkingBetRacePoolResult",
                  "value": {
                     "amount": 24100
                  },
                  "winners": [
                     4
                  ],
                  "reserveOrder": [
                     2,
                     8,
                     6,
                     4,
                     1,
                     9,
                     7,
                     3,
                     5,
                     10
                  ],
                  "systems": "214,0"
               }
            }
         },
         "starts": [
            {
               "number": 1,
               "postPosition": 1,
               "distance": 1720,
               "horse": {
                  "name": "Shezsavvy",
                  "age": 4,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "P",
                     "lastName": "Shipley",
                     "shortName": "Shi PS",
                     "license": "Okänd"
                  },
                  "money": 10899,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 2,
                           "earnings": 231400,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 5,
                           "earnings": 858400,
                           "placement": {
                              "1": 0,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 7,
                        "earnings": 1089900,
                        "placement": {
                           "1": 0,
                           "2": 1,
                           "3": 0
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 1428,
                        "earningsPerStart": 155700,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 9070
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Betterthancheddar"
                     },
                     "mother": {
                        "name": "So Savvy"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Ellen",
                  "lastName": "Rixon",
                  "shortName": "Rix El",
                  "license": "Okänd",
                  "silks": "mörk blå, gul stjär, mörk blå ärmar"
               },
               "result": {
                  "place": 2,
                  "finalOdds": 14,
                  "startNumber": 1
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1400
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 200
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 442
                  }
               }
            },
            {
               "number": 2,
               "postPosition": 2,
               "distance": 1720,
               "horse": {
                  "name": "Courage Lips",
                  "age": 4,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "J J",
                     "lastName": "Niass",
                     "shortName": "Nia JJ",
                     "license": "Okänd"
                  },
                  "money": 54045,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 5,
                           "earnings": 5031600,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 2
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 10,
                           "earnings": 372900,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 1
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 15,
                        "earnings": 5404500,
                        "placement": {
                           "1": 2,
                           "2": 2,
                           "3": 3
                        },
                        "records": [],
                        "winPercentage": 1333,
                        "placePercentage": 4666,
                        "earningsPerStart": 360300,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1856
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Courage Under Fire"
                     },
                     "mother": {
                        "name": "Tight Lipped"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "A J",
                  "lastName": "Turnbull",
                  "shortName": "Tur AJ",
                  "license": "Okänd",
                  "silks": "mörk blå, röd ok & band, mörk blå "
               },
               "result": {
                  "finalOdds": 1.8,
                  "startNumber": 2
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 180
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 4248
                  }
               }
            },
            {
               "number": 3,
               "postPosition": 3,
               "distance": 1720,
               "horse": {
                  "name": "Bara Halley",
                  "age": 4,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "F J",
                     "lastName": "Knapton",
                     "shortName": "Kna FJ",
                     "license": "Okänd"
                  },
                  "money": 9773,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 4,
                           "earnings": 591500,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 1
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 11,
                           "earnings": 385800,
                           "placement": {
                              "1": 0,
                              "2": 1,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 15,
                        "earnings": 977300,
                        "placement": {
                           "1": 0,
                           "2": 1,
                           "3": 4
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 3333,
                        "earningsPerStart": 65153,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 4048
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Mister Big"
                     },
                     "mother": {
                        "name": "Bara Picasso"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "M B",
                  "lastName": "Towers",
                  "shortName": "Tow MB",
                  "license": "Okänd",
                  "silks": "ljus grön, mörk grön korsade band, "
               },
               "result": {
                  "finalOdds": 22.1,
                  "startNumber": 3
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 2210
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 224
                  }
               }
            },
            {
               "number": 4,
               "postPosition": 4,
               "distance": 1720,
               "horse": {
                  "name": "Semi Sensation",
                  "age": 4,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "D J",
                     "lastName": "Lindon",
                     "shortName": "Lin DJ",
                     "license": "Okänd"
                  },
                  "money": 103236,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 9,
                           "earnings": 8635700,
                           "placement": {
                              "1": 2,
                              "2": 3,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 8,
                           "earnings": 723300,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 1
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 25,
                        "earnings": 10323600,
                        "placement": {
                           "1": 3,
                           "2": 4,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 1200,
                        "placePercentage": 3600,
                        "earningsPerStart": 412944,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2043
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Mr Feelgood"
                     },
                     "mother": {
                        "name": "Left Laughing"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "D J",
                  "lastName": "Lindon",
                  "shortName": "Lin DJ",
                  "license": "Okänd",
                  "silks": "gul, röd hästsko, brun ärmar"
               },
               "result": {
                  "place": 1,
                  "finalOdds": 10,
                  "startNumber": 4
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1000,
                     "finalOdds": 1000
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 260
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 937
                  }
               }
            },
            {
               "number": 5,
               "postPosition": 5,
               "distance": 1720,
               "horse": {
                  "name": "King Fisher",
                  "age": 4,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "T J",
                     "lastName": "Frost",
                     "shortName": "Fro TJ",
                     "license": "Okänd"
                  },
                  "money": 9227,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 3,
                           "earnings": 186400,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 11,
                           "earnings": 736200,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 14,
                        "earnings": 922700,
                        "placement": {
                           "1": 0,
                           "2": 0,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 1428,
                        "earningsPerStart": 65907,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 4600
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Mr Feelgood"
                     },
                     "mother": {
                        "name": "Shelly Lobell"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "G W",
                  "lastName": "Mcelhinney",
                  "shortName": "Mce GW",
                  "license": "Okänd",
                  "silks": "brun & rosa quarters, rosa ärmar"
               },
               "result": {
                  "finalOdds": 59.2,
                  "startNumber": 5
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 5920
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 188
                  }
               }
            },
            {
               "number": 6,
               "postPosition": 6,
               "distance": 1720,
               "horse": {
                  "name": "Modern Metropolis",
                  "age": 4,
                  "sex": "stallion",
                  "trainer": {
                     "firstName": "T J",
                     "lastName": "Munday",
                     "shortName": "Mun TJ",
                     "license": "Okänd"
                  },
                  "money": 88576,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 12,
                           "earnings": 2977100,
                           "placement": {
                              "1": 0,
                              "2": 2,
                              "3": 2
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 13,
                           "earnings": 5880400,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 25,
                        "earnings": 8857600,
                        "placement": {
                           "1": 1,
                           "2": 3,
                           "3": 5
                        },
                        "records": [],
                        "winPercentage": 400,
                        "placePercentage": 3600,
                        "earningsPerStart": 354304,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 4857
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Metropolitan"
                     },
                     "mother": {
                        "name": "Modern Oro"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "T P",
                  "lastName": "Mccarthy",
                  "shortName": "Mcc TP",
                  "license": "Okänd",
                  "silks": "svart, gul ok & band, svart diamo"
               },
               "result": {
                  "finalOdds": 8.5,
                  "startNumber": 6
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 850
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1678
                  }
               }
            },
            {
               "number": 7,
               "postPosition": 9,
               "distance": 1720,
               "horse": {
                  "name": "No Risk No Return",
                  "age": 9,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "S",
                     "lastName": "Wade",
                     "shortName": "Wad SW",
                     "license": "Okänd"
                  },
                  "money": 158793,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 39,
                           "earnings": 7706500,
                           "placement": {
                              "1": 1,
                              "2": 6,
                              "3": 4
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 29,
                           "earnings": 4462500,
                           "placement": {
                              "1": 1,
                              "2": 2,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 100,
                        "earnings": 15879300,
                        "placement": {
                           "1": 2,
                           "2": 9,
                           "3": 11
                        },
                        "records": [],
                        "winPercentage": 200,
                        "placePercentage": 2200,
                        "earningsPerStart": 158793,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 5983
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Life Sign"
                     },
                     "mother": {
                        "name": "Perfect Purr"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Jack",
                  "lastName": "Wade",
                  "shortName": "Wad Ja",
                  "license": "Okänd",
                  "silks": "gul, svart & vit razorback racing l"
               },
               "result": {
                  "finalOdds": 77.1,
                  "startNumber": 7
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 7710
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 227
                  }
               }
            },
            {
               "number": 8,
               "postPosition": 10,
               "distance": 1720,
               "horse": {
                  "name": "The Maniac",
                  "age": 5,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "P",
                     "lastName": "Breaden",
                     "shortName": "Bre PB",
                     "license": "Okänd"
                  },
                  "money": 28935,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 3,
                           "earnings": 218600,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 4,
                           "earnings": 2674900,
                           "placement": {
                              "1": 1,
                              "2": 1,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 7,
                        "earnings": 2893500,
                        "placement": {
                           "1": 1,
                           "2": 1,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 1428,
                        "placePercentage": 5714,
                        "earningsPerStart": 413357,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2403
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Armbro Operative"
                     },
                     "mother": {
                        "name": "Assassins Smile"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "P",
                  "lastName": "Breaden",
                  "shortName": "Bre P",
                  "license": "Okänd",
                  "silks": "rosa, gul romb"
               },
               "result": {
                  "place": 3,
                  "finalOdds": 5,
                  "startNumber": 8
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 500
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 140
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1723
                  }
               }
            },
            {
               "number": 9,
               "postPosition": 11,
               "distance": 1720,
               "horse": {
                  "name": "Pure Charisma",
                  "age": 4,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "I C",
                     "lastName": "Wilson",
                     "shortName": "Wil IC",
                     "license": "Okänd"
                  },
                  "money": 113878,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 12,
                           "earnings": 6426900,
                           "placement": {
                              "1": 2,
                              "2": 5,
                              "3": 1
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 14,
                           "earnings": 4960800,
                           "placement": {
                              "1": 1,
                              "2": 2,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 26,
                        "earnings": 11387800,
                        "placement": {
                           "1": 3,
                           "2": 7,
                           "3": 4
                        },
                        "records": [],
                        "winPercentage": 1153,
                        "placePercentage": 5384,
                        "earningsPerStart": 437992,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1483
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Always A Virgin"
                     },
                     "mother": {
                        "name": "Just Sonia"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "J N",
                  "lastName": "Douglass",
                  "shortName": "Dou JN",
                  "license": "Okänd",
                  "silks": "mörk blå, ljus blå hästsko & ärmar"
               },
               "result": {
                  "finalOdds": 15.2,
                  "startNumber": 9
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1520
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 320
                  }
               }
            },
            {
               "number": 10,
               "scratched": true,
               "postPosition": 12,
               "distance": 1720,
               "horse": {
                  "name": "Diamond Thief",
                  "age": 8,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "S",
                     "lastName": "Wade",
                     "shortName": "Wad SW",
                     "license": "Okänd"
                  },
                  "money": 105648,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 28,
                           "earnings": 5423800,
                           "placement": {
                              "1": 0,
                              "2": 5,
                              "3": 4
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 27,
                           "earnings": 1385700,
                           "placement": {
                              "1": 0,
                              "2": 2,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 88,
                        "earnings": 10564800,
                        "placement": {
                           "1": 0,
                           "2": 9,
                           "3": 7
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 1818,
                        "earningsPerStart": 120054,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 8516
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Speed King"
                     },
                     "mother": {
                        "name": "Vain Shekel"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Lachie",
                  "lastName": "Manzelmann",
                  "shortName": "Man La",
                  "license": "Okänd",
                  "silks": "svart, gul razorback racing logo & ar"
               },
               "result": {
                  "finalOdds": 0,
                  "startNumber": 10
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 0
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 14
                  }
               }
            }
         ]
      },
      {
         "id": "2019-04-04_51_6",
         "name": "Penrith - Passgångslopp",
         "date": "2019-04-04",
         "number": 6,
         "distance": 2125,
         "startMethod": "auto",
         "startTime": "2019-04-04T11:35:48",
         "scheduledStartTime": "2019-04-04T11:33:00",
         "prize": "6120 (Pris i AUD)",
         "terms": [
            "Alla."
         ],
         "sport": "trot",
         "track": {
            "id": 51,
            "name": "Penrith - AUS",
            "countryCode": "AU"
         },
         "result": {},
         "status": "results",
         "mediaId": "314248773348",
         "pools": {
            "vinnare": {
               "@type": ".VinnarePool",
               "id": "vinnare_2019-04-04_51_6",
               "status": "results",
               "timestamp": "2019-04-04 11:42:36",
               "turnover": 5790500,
               "result": {
                  "@type": ".VinnarePoolRaceResult",
                  "winners": [
                     {
                        "number": 3,
                        "odds": 110
                     }
                  ]
               }
            },
            "plats": {
               "@type": ".PlatsPool",
               "id": "plats_2019-04-04_51_6",
               "status": "results",
               "timestamp": "2019-04-04 11:42:36",
               "turnover": 3465700,
               "result": {
                  "@type": ".PlatsPoolRaceResult",
                  "winners": {
                     "first": [
                        {
                           "number": 3,
                           "odds": 104
                        }
                     ],
                     "second": [
                        {
                           "number": 7,
                           "odds": 550
                        }
                     ],
                     "third": [
                        {
                           "number": 1,
                           "odds": 180
                        }
                     ]
                  }
               }
            },
            "tvilling": {
               "@type": ".TvillingPool",
               "id": "tvilling_2019-04-04_51_6",
               "status": "results",
               "timestamp": "2019-04-04 11:42:36",
               "turnover": 2588000,
               "result": {
                  "@type": ".TvillingPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           3,
                           7
                        ],
                        "odds": 1610
                     }
                  ]
               }
            },
            "trio": {
               "@type": ".TrioPool",
               "id": "trio_2019-04-04_51_6",
               "status": "results",
               "timestamp": "2019-04-04 11:42:36",
               "turnover": 462200,
               "result": {
                  "@type": ".TrioPoolRaceResult",
                  "winners": [
                     {
                        "combination": [
                           3,
                           7,
                           1
                        ],
                        "odds": 3780
                     }
                  ]
               }
            },
            "V4": {
               "@type": ".Pool",
               "result": {
                  "@type": ".MarkingBetRacePoolResult",
                  "value": {
                     "amount": 25100
                  },
                  "winners": [
                     3
                  ],
                  "reserveOrder": [
                     3,
                     2,
                     4,
                     1,
                     5,
                     8,
                     6,
                     7
                  ],
                  "systems": "205,0"
               }
            }
         },
         "starts": [
            {
               "number": 1,
               "postPosition": 1,
               "distance": 2125,
               "horse": {
                  "name": "Sputnik",
                  "age": 3,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "D J",
                     "lastName": "Reynolds",
                     "shortName": "Rey DJ",
                     "license": "Okänd"
                  },
                  "money": 6558,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 0,
                           "earnings": 0,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 12,
                           "earnings": 655800,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 12,
                        "earnings": 655800,
                        "placement": {
                           "1": 0,
                           "2": 0,
                           "3": 3
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 2500,
                        "earningsPerStart": 54650,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2216
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Mr Feelgood"
                     },
                     "mother": {
                        "name": "Satellite Star"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "J J",
                  "lastName": "Reynolds",
                  "shortName": "Rey JJ",
                  "license": "Okänd",
                  "silks": "blå, vit ok & orange stjär, blå & "
               },
               "result": {
                  "place": 3,
                  "finalOdds": 16.3,
                  "startNumber": 1
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1630
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 180
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 661,
                     "potentialPayout": {
                        "value": 119900
                     }
                  }
               }
            },
            {
               "number": 2,
               "postPosition": 2,
               "distance": 2125,
               "horse": {
                  "name": "Bold Ambition",
                  "age": 3,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "I C",
                     "lastName": "Wilson",
                     "shortName": "Wil IC",
                     "license": "Okänd"
                  },
                  "money": 6558,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 0,
                           "earnings": 0,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 5,
                           "earnings": 655800,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 1
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 5,
                        "earnings": 655800,
                        "placement": {
                           "1": 0,
                           "2": 0,
                           "3": 1
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 2000,
                        "earningsPerStart": 131160,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 4560
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Pet Rock"
                     },
                     "mother": {
                        "name": "Karamea Sunbird"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "J N",
                  "lastName": "Douglass",
                  "shortName": "Dou JN",
                  "license": "Okänd",
                  "silks": "mörk blå, ljus blå hästsko & ärmar"
               },
               "result": {
                  "finalOdds": 26.9,
                  "startNumber": 2
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 2690
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 1072,
                     "potentialPayout": {
                        "value": 93800
                     }
                  }
               }
            },
            {
               "number": 3,
               "postPosition": 3,
               "distance": 2125,
               "horse": {
                  "name": "Colossal Stride",
                  "age": 3,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "S P",
                     "lastName": "Tritton, L R Tritton",
                     "shortName": "Tri SP",
                     "license": "Okänd"
                  },
                  "money": 27649,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 5,
                           "earnings": 1832600,
                           "placement": {
                              "1": 0,
                              "2": 1,
                              "3": 2
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 2,
                           "earnings": 932300,
                           "placement": {
                              "1": 0,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 7,
                        "earnings": 2764900,
                        "placement": {
                           "1": 0,
                           "2": 2,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 5714,
                        "earningsPerStart": 394985,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 2800
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Bettors Delight"
                     },
                     "mother": {
                        "name": "Tailamade Lombo"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "Lachie",
                  "lastName": "Manzelmann",
                  "shortName": "Man La",
                  "license": "Okänd",
                  "silks": "ljus blå & gul romber, gul "
               },
               "result": {
                  "place": 1,
                  "finalOdds": 1.1,
                  "startNumber": 3
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 110,
                     "finalOdds": 110
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 104
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 6055,
                     "potentialPayout": {
                        "value": 25000
                     }
                  }
               }
            },
            {
               "number": 4,
               "postPosition": 4,
               "distance": 2125,
               "horse": {
                  "name": "Cannan",
                  "age": 3,
                  "sex": "stallion",
                  "trainer": {
                     "firstName": "Sonya",
                     "lastName": "Smith",
                     "shortName": "Smi So",
                     "license": "Okänd"
                  },
                  "money": 6558,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 0,
                           "earnings": 0,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 4,
                           "earnings": 655800,
                           "placement": {
                              "1": 0,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 4,
                        "earnings": 655800,
                        "placement": {
                           "1": 0,
                           "2": 1,
                           "3": 0
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 2500,
                        "earningsPerStart": 163950,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 1031
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Sportswriter"
                     },
                     "mother": {
                        "name": "Hope Riley"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "A M",
                  "lastName": "Butt",
                  "shortName": "But AM",
                  "license": "Okänd",
                  "silks": "vit, rödbr star, vit ärmar, maroo"
               },
               "result": {
                  "finalOdds": 8.9,
                  "startNumber": 4
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 890
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 882,
                     "potentialPayout": {
                        "value": 114600
                     }
                  }
               }
            },
            {
               "number": 5,
               "postPosition": 5,
               "distance": 2125,
               "horse": {
                  "name": "Takinover",
                  "age": 3,
                  "sex": "mare",
                  "trainer": {
                     "firstName": "P G",
                     "lastName": "Tanti",
                     "shortName": "Tan PG",
                     "license": "Okänd"
                  },
                  "money": 20608,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 0,
                           "earnings": 0,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 10,
                           "earnings": 2060800,
                           "placement": {
                              "1": 0,
                              "2": 2,
                              "3": 2
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 10,
                        "earnings": 2060800,
                        "placement": {
                           "1": 0,
                           "2": 2,
                           "3": 2
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 4000,
                        "earningsPerStart": 206080,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 3830
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Blissfull Hall"
                     },
                     "mother": {
                        "name": "Miss Woodport"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "T P",
                  "lastName": "Mccarthy",
                  "shortName": "Mcc TP",
                  "license": "Okänd",
                  "silks": "mörk blå, orange maltese kors"
               },
               "result": {
                  "finalOdds": 19.6,
                  "startNumber": 5
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 1960
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 621,
                     "potentialPayout": {
                        "value": 143300
                     }
                  }
               }
            },
            {
               "number": 6,
               "postPosition": 6,
               "distance": 2125,
               "horse": {
                  "name": "Jackbkwik",
                  "age": 3,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "R J",
                     "lastName": "Munnoch",
                     "shortName": "Mun RJ",
                     "license": "Okänd"
                  },
                  "money": 11188,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 3,
                           "earnings": 347200,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 6,
                           "earnings": 771600,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 3
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 9,
                        "earnings": 1118800,
                        "placement": {
                           "1": 0,
                           "2": 0,
                           "3": 3
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 3333,
                        "earningsPerStart": 124311,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 5018
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Smiling Shard"
                     },
                     "mother": {
                        "name": "Yeah Baby"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "R J",
                  "lastName": "Munnoch",
                  "shortName": "Mun RJ",
                  "license": "Okänd",
                  "silks": "ljus grön & röd rutor, ljus grön "
               },
               "result": {
                  "finalOdds": 53.6,
                  "startNumber": 6
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 5360
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 210,
                     "potentialPayout": {
                        "value": 368500
                     }
                  }
               }
            },
            {
               "number": 7,
               "postPosition": 9,
               "distance": 2125,
               "horse": {
                  "name": "Devouged",
                  "age": 3,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "B R",
                     "lastName": "Abbott",
                     "shortName": "Abb BR",
                     "license": "Okänd"
                  },
                  "money": 835,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 0,
                           "earnings": 0,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 3,
                           "earnings": 83500,
                           "placement": {
                              "1": 0,
                              "2": 1,
                              "3": 0
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 3,
                        "earnings": 83500,
                        "placement": {
                           "1": 0,
                           "2": 1,
                           "3": 0
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 3333,
                        "earningsPerStart": 27833,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 886
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Roll With Joe"
                     },
                     "mother": {
                        "name": "Machinegun Molly"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "B J",
                  "lastName": "Abbott",
                  "shortName": "Abb BJ",
                  "license": "Okänd",
                  "silks": "mörk blå, ljus grön maltese, rosa sta"
               },
               "result": {
                  "place": 2,
                  "finalOdds": 51.1,
                  "startNumber": 7
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 5110
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999,
                     "odds": 550
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 187,
                     "potentialPayout": {
                        "value": 303400
                     }
                  }
               }
            },
            {
               "number": 8,
               "postPosition": 10,
               "distance": 2125,
               "horse": {
                  "name": "Humming Top",
                  "age": 3,
                  "sex": "gelding",
                  "trainer": {
                     "firstName": "R W",
                     "lastName": "Adams",
                     "shortName": "Ada RW",
                     "license": "Okänd"
                  },
                  "money": 2443,
                  "statistics": {
                     "years": {
                        "2018": {
                           "starts": 0,
                           "earnings": 0,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 0
                           },
                           "records": []
                        },
                        "2019": {
                           "starts": 7,
                           "earnings": 244300,
                           "placement": {
                              "1": 0,
                              "2": 0,
                              "3": 1
                           },
                           "records": []
                        }
                     },
                     "life": {
                        "starts": 7,
                        "earnings": 244300,
                        "placement": {
                           "1": 0,
                           "2": 0,
                           "3": 1
                        },
                        "records": [],
                        "winPercentage": 0,
                        "placePercentage": 1428,
                        "earningsPerStart": 34900,
                        "startPoints": 0
                     },
                     "lastFiveStarts": {
                        "averageOdds": 8766
                     }
                  },
                  "pedigree": {
                     "father": {
                        "name": "Always A Virgin"
                     },
                     "mother": {
                        "name": "Rainbow Crystal"
                     }
                  },
                  "foreignOwned": true
               },
               "driver": {
                  "id": 0,
                  "firstName": "R W",
                  "lastName": "Adams",
                  "shortName": "Ada RW",
                  "license": "Okänd",
                  "silks": "svart, röd band & armband"
               },
               "result": {
                  "finalOdds": 42.3,
                  "startNumber": 8
               },
               "pools": {
                  "vinnare": {
                     "@type": ".VinnareStartPool",
                     "odds": 4230
                  },
                  "plats": {
                     "@type": ".PlatsStartPool",
                     "minOdds": 100,
                     "maxOdds": 9999
                  },
                  "V4": {
                     "@type": ".MarkingBetStartPool",
                     "betDistribution": 313,
                     "potentialPayout": {
                        "value": 271500
                     }
                  }
               }
            }
         ]
      }
   ],
   "currentVersion": 1554397596836
}
import React, {createContext, useState} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [itemsList, setitemsList] = useState([
        {
        "_id":"1",
        "title": "Laptop",
        "department": "IT",
        "CTI": [
                {Category : "OpsTechIT"},
                {Type : "Client+Devices"},
                {Item : "Desktop/Laptop+(Windows)"}
                ],
        "images": [
                "Laptop"
                ],

        "commonIssues": [

                {1: "Broken Laptop", type : "TT"},
                {2: "Software Issue", type : "TT"},
                {3: "Request Laptop", type : "AI"},
                {4: "Temporary Loan", type : "TT"},
                {5: "Missing / Lost", type : "TT"},
                {6: "Isolated / ACME", type : "AI"},
                {7: "Network / WiFi Issue", type : "TT"},
                {8: "Hardware Issue", type : "TT"},
                {9: "Battery Issue", type : "TT"},
                {10: "Power Issue", type : "TT"},
                {11: "Screen Issue", type : "TT"},
                {12: "Keyboard Issue", type : "TT"},
                {13: "Trackpad Issue", type : "TT"},
                {14: "USB Issue", type : "TT"},
        ],
        "tags": [
        "LAPTOP", "ACME", "HP", "COW", "IT", "COMPUTER", "WINDOWS", "CHIME"
],
        },
        {
        "_id":"2",
                "title": "Desktop PC",
                "department": "IT",
                "CTI": [
                {Category : "OpsTechIT"},
                {Type : "Client+Devices"},
                {Item : "Desktop/Laptop+(Windows)"}
                ],
        "images": [
                "Desktop"
                ],

        "commonIssues": [
                {1: "Broken Desktop", type : "TT"},
                {2: "Software Issue", type : "TT"},
                {3: "Request Equipment", type : "AI"},
                {6: "Isolated / ACME", type : "AI"},
                {7: "Network  Issue", type : "TT"},
                {8: "Hardware Issue", type : "TT"},
                {10: "Power Issue", type : "TT"},
                {12: "Keyboard Issue", type : "TT"},
                {13: "Mouse Issue", type : "TT"},
                {14: "USB Issue", type : "TT"},

                ],
        "tags": [
                "DESKTOP", "ACME", "HP", "DESK", "IT", "WINDOWS", "CHIME"

        ],
        },
        {    
        "_id":"3",
        "title": "HP Printer",
        "department": "IT",
        "CTI": [
                {Category : "OpsTechIT"},
                {Type : "Client+Devices"},
                {Item : "Printers"}
                ],
        "images": [
                "HPPrinter"
                ],

        "commonIssues": [
                {1: "Broken Printer", type : "TT"},
                {2: "Paper JAM", type : "TT"},
                {3: "Request Equipment", type : "AI"},
                {4: "Setup Printer", type : "TT"},
                {5: "Printer not printing", type : "TT"},
                {7: "Printer not scanning", type : "TT"},
                {6: "Network Issue", type : "TT"},
                {8: "Hardware Issue", type : "TT"},
                {9: "Printer not connecting", type : "TT"},                                       
                ],
        "tags": [
                "PRINTER", "PAPER", "HP", "DESK", "IT", "FAX", "SCAN", 
        ],
        },
        {    
        "_id":"4",
        "title": "Mobile Phone",
        "department": "IT",
        "CTI": [
                {Category : "OpsTechIT"},
                {Type : "Client+Devices"},
                {Item : "Kindle"}
                ],
        "images": [
                "iPhone"
                ],

        "commonIssues": [
                {1: "Broken Screen", type : "TT"},
                {2: "TouchScreen Issues", type : "TT"},
                {3: "Email on phone", type : "AI"},
                {3: "AEA App", type : "AI"},
                {3: "Email on phone", type : "AI"},
                {4: "Software Update", type : "TT"},
                {5: "Phone Locked", type : "TT"},
                {7: "No power", type : "TT"},
                {6: "Charger request", type : "TT"},
                {8: "Headphones Request", type : "TT"},
                {9: "No Signal", type : "TT"},                                       
                ],
        "tags": [
                "IPHONE", "ANDROID", "MOBILE", "PHONE", "IT", "AEA", "CHIME", "EMAIL", "APP", "APPLE"
        ],
        },
        {    
        "_id":"5",
        "title": "Kayak Tablet",
        "department": "IT",
        "CTI": [
                {Category : "OpsTechIT"},
                {Type : "Client+Devices"},
                {Item : "Phone+(Mobile)"}
                ],
        "images": [
                "Tablet"
                ],

        "commonIssues": [
                {1: "Broken Screen", type : "TT"},
                {2: "TouchScreen Issues", type : "TT"},
                {3: "Login Issues", type : "TT"},
                {4: "Software Update", type : "TT"},
                {5: "Tablet Locked", type : "TT"},
                {7: "No power", type : "TT"},
                {6: "Charger request", type : "TT"},
                {8: "WiFi Issue", type : "TT"},
                {9: "No Signal", type : "TT"},
                {10: "Raft OS issue", type : "TT"},                                     
                ],
        "tags": [
                "TABLET", "KAYAK", "AMNESTY", "IT"
                ],
        },
        {    
                "_id":"RAD",
                "title": "RAD Equipment",
                "department": "RAD",
                "images": [
                        "RAD"
                        ],
                "tags": [
                        "RAD", "EQUIPMENT", "REQUEST", "RAD21", "NEW", "HIRE"
                        ],
        },
{    
        "_id":"6",
        "title": "Zebra Printer",
        "department": "IT",
        "CTI": [
                {Category : "OpsTechIT"},
                {Type : "Client+Devices"},
                {Item : "Zebra+PSLIP+Printer"}
                ],
        "images": [
                "ZebraPrinter"
                ],

        "commonIssues": [
                {1: "Faded Printing", type : "TT"},
                {2: "Not Printing", type : "TT"},
                {3: "Broken Device", type : "TT"},
                {4: "Connection Issue", type : "TT"},
                {5: "No Power", type : "TT"},
                {7: "Cable Damaged", type : "TT"},
                {6: "Configuration issue", type : "TT"},
                {8: "Hardware Issue", type : "TT"},
                {9: "Request Equipment", type : "TT"},
                ],
        "tags": [
                "PRINTER", "COW", "PACK", "SLAM", "AFE", "ZEBRA", "IT", "ASIN", "LABEL", 
                ],
},

                                                                                
        {    
                "_id":"7",
                "title": "Zebra Mobile Printer (QLN Series)",
                "department": "IT",
                "CTI": [
                        {Category : "OpsTechIT"},
                        {Type : "Mobile"},
                        {Item : "Mobile+Printer"}
                        ],
                "images": [
                        "ZebraMobilePrinter"
                        ],
        
                "commonIssues": [
                        {1: "Faded Printing", type : "TT"},
                        {2: "Not Printing", type : "TT"},
                        {3: "Broken Device", type : "TT"},
                        {4: "Connection Issue", type : "TT"},
                        {4: "WiFi Issue", type : "TT"},
                        {4: "Bluetooth Issue", type : "TT"},
                        {5: "No Power", type : "TT"},
                        {6: "Configuration issue", type : "TT"},
                        {6: "Software issue", type : "TT"},
                        {8: "Hardware Issue", type : "TT"},
                        {9: "Request Equipment", type : "TT"},
                        ],
                "tags": [
                        "PRINTER", "QLN", "ZEBRA", "IT", "ASIN", "LABEL", 
                        ],
                },
        {    
                "_id":"8",
                "title": "Zebra SLAM Printer",
                "department": "IT",
                "CTI": [
                        {Category : "OpsTechIT"},
                        {Type : "Client+Devices"},
                        {Item : "Zebra+Slam+Printer"}
                        ],
                "images": [
                        "ZebraSlamPrinter"
                        ],
        
                "commonIssues": [
                        {1: "Faded Printing", type : "TT"},
                        {2: "Not Printing", type : "TT"},
                        {3: "Broken Device", type : "TT"},
                        {4: "Connection Issue", type : "TT"},
                        {5: "No Power", type : "TT"},
                        {6: "Configuration issue", type : "TT"},
                        {6: "Software issue", type : "TT"},
                        {8: "Hardware Issue", type : "TT"},
                        {9: "Request Equipment", type : "TT"},
                        ],
                "tags": [
                        "PRINTER", "SLAM", "ZEBRA", "IT", "ASIN", "LABEL", 
                        ],
                },
        {    
                "_id":"9",
                "title": "Zebra Card Printer",
                "department": "IT",
                "CTI": [
                        {Category : "OpsTechIT"},
                        {Type : "Client+Devices"},
                        {Item : "Printers"}
                        ],
                "images": [
                        "ZebraCardPrinter"
                        ],
        
                "commonIssues": [
                        {1: "Faded Printing", type : "TT"},
                        {2: "Not Printing", type : "TT"},
                        {3: "Broken Device", type : "TT"},
                        {4: "Connection Issue", type : "TT"},
                        {5: "No Power", type : "TT"},
                        {6: "Configuration issue", type : "TT"},
                        {6: "Software issue", type : "TT"},
                        {8: "Hardware Issue", type : "TT"},
                        {9: "Request Equipment", type : "TT"},
                        ],
                "tags": [
                        "PRINTER", "CARD", "ZEBRA", "IT", "ASIN", "LABEL", "SECURITY", "BADGE"
                        ],
                },

        {    
                "_id":"10",
                "title": "COW",
                "department": "IT",
                "CTI": [
                        {Category : "OpsTechIT"},
                        {Type : "Client+Devices"},
                        {Item : "Mobile+Cart"}
                        ],
                "images": [
                        "COW"
                        ],
        
                "commonIssues": [
                        {1: "Discharger Issue", type : "TT"},
                        {2: "Battery Issue", type : "TT"},
                        {3: "Docking Issue", type : "TT"},
                        {4: "Invertor Issue", type : "TT"},
                        {5: "No Power", type : "TT"},
                        {6: "No connection to laptop", type : "TT"},
                        {9: "Request aditional COW`s", type : "TT"},
                        ],
                "tags": [
                        "COW", "INVERTOR", "SOUTHGATE", "IT", "DISCHARGER",
                        ],
                },

                {    
                        "_id":"11",
                        "title": "ThinClient",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Thin+Client+-+FC"}
                                ],
                        "images": [
                                "HPThinClient"
                                ],
                
                        "commonIssues": [
                                {3: "No Power", type : "TT"},
                                {4: "Not Working", type : "TT"},
                                {5: "Damaged Device", type : "TT"},
                                {6: "WiFi Issue", type : "TT"},
                                {7: "Request Equipment", type : "TT"},
                                {8: "Hardware Issue", type : "TT"},
                                {9: "Software Issue", type : "TT"},

                                
                                ],
                        "tags": [
                                "HP", "THINCLIENT", "TC", "PACK", "FCGAMES", "IT", "GAMES", "ACID", "INDUCTOR", "PANORAMA", "AFE"
                                ],
                        }, 

                {    
                        "_id":"12",
                        "title": "Clock In/Out Device",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Time-Clock"}
                                ],
                        "images": [
                                "CLOCK"
                                ],
                
                        "commonIssues": [
                                {1: "Display Issue", type : "TT"},
                                {2: "Touch Screen", type : "TT"},
                                {3: "No Power", type : "TT"},
                                {4: "Not Working", type : "TT"},
                                {5: "Damaged Device", type : "TT"},
                                
                                ],
                        "tags": [
                                "CLOCK", "IN", "OUT", "TIME", "IT",
                                ],
                        },    
                
        
                {    
                        "_id":"13",
                        "title": "Yunikey / Zukey",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Equipment+Request+(New/Loaner)"}
                                ],
                        "images": [
                                "Yubikey"
                                ],
                
                        "commonIssues": [
                                {1: "Forgot PIN", type : "TT"},
                                {2: "Lost Device", type : "TT"},
                                {3: "Damaged Device", type : "TT"},
                                {4: "Request Equipment", type : "TT"},     
                                
                                ],
                        "tags": [
                                "YUBIKEY", "ZUKEY", "MIDWAY", "VPN", "IT",
                                ],
                        },          


                {    
                        "_id":"14",
                        "title": "MC330x Scanner",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "RF+Scanners"}
                                ],
                        "images": [
                                "MC33Scanner"
                                ],
                
                        "commonIssues": [
                                {1: "Damaged Screen", type : "TT"},
                                {2: "Touchscreen not working", type : "TT"},
                                {3: "Broken Device", type : "TT"},
                                {4: "Damaged Keyboard", type : "TT"}, 
                                {5: "No Power", type : "TT"},
                                {6: "WiFi Issues", type : "TT"},
                                {7: "Disconected ", type : "TT"}, 
                                {8: "Settings / Config Issue", type : "TT"}, 
                                {9: "Request Equipment", type : "TT"},    
                                
                                ],
                        "tags": [
                                "RF", "SCANNER", "MC33", "IT", "MOBILE"
                                ],
                        },  


                {    
                        "_id":"15",
                        "title": "TV Display",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Audio+Visual"},
                                {Item : "TV+Displays"}
                                ],
                        "images": [
                                "TVScreen"
                                ],
                
                        "commonIssues": [
                                {1: "Damaged Screen", type : "TT"},
                                {5: "No Power", type : "TT"},
                                {7: "Disconected ", type : "TT"}, 
                                {9: "Request Equipment", type : "TT"},  
                                {10: "ACID Feed", type : "TT"},
                                
                                ],
                        "tags": [
                                "TV", "DISPLAY", "ACID", "IT",
                                ],
                        },  
        
                {    
                        "_id":"16",
                        "title": "PC Monitor",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Peripherals"}
                                ],
                        "images": [
                                "Monitor"
                                ],
                
                        "commonIssues": [
                                {1: "Damaged Screen", type : "TT"},
                                {3: "Broken Device", type : "TT"},
                                {5: "No Power", type : "TT"},
                                {7: "Disconected ", type : "TT"}, 
                                {9: "Request Equipment", type : "TT"},    
                                
                                ],
                        "tags": [
                                "MONITOR", "DISPLAY", "PC", "IT",
                                ],
                        },  
                {    
                        "_id":"17",
                        "title": "Radio",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Radio"}
                                ],
                        "images": [
                                "Radio"
                                ],
                
                        "commonIssues": [
                                {1: "Damaged Screen", type : "TT"},
                                {3: "Broken Device", type : "TT"},
                                {9: "Volume Issue", type : "TT"},    
                                {5: "No Power", type : "TT"},
                                {7: "Device Locked ", type : "TT"}, 
                                {9: "Request Equipment", type : "TT"}, 
                                {9: "Request Loan", type : "TT"},    
                                
                                ],
                        "tags": [
                                "RADIO", "MOTOROLA", "IT",
                                ],
                        },  



                {    
                        "_id":"18",
                        "title": "Desk Radio",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Radio"}
                                ],
                        "images": [
                                "Deskradio"
                                ],
                
                        "commonIssues": [
                                {1: "Damaged Screen", type : "TT"},
                                {3: "Broken Device", type : "TT"},
                                {9: "Volume Issue", type : "TT"},    
                                {5: "No Power", type : "TT"},
                                {7: "Device Locked ", type : "TT"}, 
                                {9: "Request Equipment", type : "TT"}, 
                                {9: "Request Loan", type : "TT"},    
                                
                                ],
                        "tags": [
                                "RADIO", "MOTOROLA", "IT", "DESK"
                                ],
                        },   
                {    
                        "_id":"19",
                        "title": "Docking Station",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Peripherals"}
                                ],
                        "images": [
                                "DockingStation"
                                ],
                
                        "commonIssues": [
                                {3: "Broken Device", type : "TT"},
                                {5: "No Power", type : "TT"},
                                {9: "Request Equipment", type : "TT"}, 
                                {9: "Not Charging", type : "TT"},
                                
                                ],
                        "tags": [
                                "DOCKING", "STATION", "IT", "COW", "DESK"
                                ],
                        },  



                {    
                        "_id":"20",
                        "title": "TC56/57",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Mobile+Scanners"}
                                ],
                        "images": [
                                "TC56"
                                ],
                
                        "commonIssues": [
                                {1: "Damaged Screen", type : "TT"},
                                {2: "Touchscreen Issue", type : "TT"},
                                {3: "Broken Device", type : "TT"},
                                {5: "No Power", type : "TT"},
                                {7: "Device Locked ", type : "TT"}, 
                                {9: "Request Equipment", type : "TT"}, 
                                {9: "Request Loan", type : "TT"},    
                                
                                ],
                        "tags": [
                                "TC", "TC56", "TC57", "SCANNER", "IT", "MOBILE", "TDR", "MARSHALL", "YARD"
                                ],
                        },    
                        
                {    
                        "_id":"21",
                        "title": "USB Scanner",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Scanners+(Tethered/Bluetooth)"}
                                ],
                        "images": [
                                "USBScanner"
                                ],
                
                        "commonIssues": [
                                {3: "Broken Device", type : "TT"},
                                {5: "No Power", type : "TT"},
                                {7: "Not Scanning", type : "TT"},
                                {9: "Request Equipment", type : "TT"}, 
                                
                                ],
                        "tags": [
                                "USB", "SCANNER", "IT", "COW", "DESK", "PACK", "AFE","SLAM", "PROBLEM SOLVE", "PS"
                                ],
                        },  



                {    
                        "_id":"22",
                        "title": "Bluetooth Scanner",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Bluetooth+Scanner"}
                                ],
                        "images": [
                                "BluetoothScanner"
                                ],
                
                        "commonIssues": [
                                {3: "Broken Device", type : "TT"},
                                {5: "No Power", type : "TT"},
                                {7: "Not Scanning", type : "TT"},
                                {9: "Request Equipment", type : "TT"},   
                                
                                ],
                        "tags": [
                                "BLUETOOTH", "SCANNER", "IT", "COW", "DESK", "PACK", "AFE","SLAM", "PROBLEM SOLVE", "PS", "PICK", "STOW",
                                ],
                        }, 


                {    
                        "_id":"23",
                        "title": "WAT (CABLE ONLY)",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Scanners+(Tethered/Bluetooth)"}
                                ],
                        "images": [
                                "WATIT"
                                ],
                
                        "commonIssues": [
                                {3: "Issue with Connection", type : "TT"},

                                
                                ],
                        "tags": [
                                "WAT", "CABLE", "IT", "USB", "PACK", "AFE","SLAM", "PROBLEM SOLVE", "PS"
                                ],
                        },        
                                     {    
                                "_id":"30",
                                "title": "Pathfinder 6140",
                                "department": "IT",
                                "CTI": [
                                        {Category : "OpsTechIT"},
                                        {Type : "Audio+Visual"},
                                        {Item : "AV"}
                                        ],
                                "images": [
                                        "Pathfinder"
                                        ],
                        
                                "commonIssues": [
                                        {3: "Not Printing Labels", type : "TT"},
                                        {5: "Jammed Rollers", type : "TT"},
                                        {9: "Broken Rollers", type : "TT"},
                                        {11: "Request Equipment", type : "TT"},
                                        {11: "Device Broken", type : "TT"},

                                        
                                        ],
                                "tags": [
                                        "PATHFINDER", "SCANNER", "6140", "IT", "LABEL"
                                        ],
                                }, 



                {    
                        "_id":"24",
                        "title": "Account Issues",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Account+and+Password"},
                                {Item : "Specialized+Services"}
                                ],
                        "images": [
                                "Account"
                                ],
                
                        "commonIssues": [
                                {3: "Forgot Password", type : "TT"},
                                {5: "Login Issues", type : "TT"},
                                {7: "Account Locked", type : "TT"},
                                
                                ],
                        "tags": [
                                "PASSWORD", "ACCOUNT", "MIDWAY", "LOGIN", "LOCKED", "IT", "USER"
                                ],
                        }, 
                        

                {    
                        "_id":"25",
                        "title": "CCTV Camera",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Camera"},
                                {Item : "Surveillance+Applications+(Milestone)"}
                                ],
                        "images": [
                                "CCTV"
                                ],
                
                        "commonIssues": [
                                {3: "Issue with Connection", type : "TT"},
                                {5: "Camera Not Working", type : "TT"},
                                {7: "Camera Not Recording", type : "TT"},
                                {9: "Request Equipment", type : "TT"},


                                
                                ],
                        "tags": [
                                "CCTV", "CAMERA", "SURVEILANCE", "SECURITY", "IT",
                                ],
                        },  



                {    
                        "_id":"26",
                        "title": "Projector",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Audio+Visual"},
                                {Item : "AV"}
                                ],
                        "images": [
                                "Projector"
                                ],
                
                        "commonIssues": [
                                {3: "Issue with Connection", type : "TT"},
                                {5: "Projector Not Working", type : "TT"},
                                {7: "Request Equipment", type : "TT"},
                                {9: "Issue with Image", type : "TT"},
                                {11: "Calibration", type : "TT"},
                                
                                ],
                        "tags": [
                                "PROJECTOR", "AV", "CONFERENCING", "IT", 
                                ],
                        }, 

                {    
                        "_id":"27",
                        "title": "ALPR",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Audio+Visual"},
                                {Item : "AV"}
                                ],
                        "images": [
                                "ALPR"
                                ],
                
                        "commonIssues": [
                                {3: "Issue with Connection", type : "TT"},
                                {5: "Camera Not Working", type : "TT"},
                                {9: "Issue with Image", type : "TT"},
                                {11: "Calibration", type : "TT"},
                                
                                ],
                        "tags": [
                                "ALPR", "CAMERA", "TRUCK", "IT", 
                                ],
                        }, 

                {    
                        "_id":"28",
                        "title": "Genovation Keypad",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Client+Devices"},
                                {Item : "Scanners+(Tethered/Bluetooth)"}
                                ],
                        "images": [
                                "Genovation"
                                ],
                
                        "commonIssues": [
                                {3: "Issue with Connection", type : "TT"},
                                {5: "Keypad Not Working", type : "TT"},
                                {7: "Request Equipment", type : "TT"},
                                {11: "Calibration", type : "TT"},
                                
                                ],
                        "tags": [
                                "GENOVATION", "KEYBOARD", "PACK", "IT", "AFE", "SLAM", "PROBLEM SOLVE", "PS"
                                ],
                        }, 

                {    
                        "_id":"29",
                        "title": "SPOO Scanner",
                        "department": "IT",
                        "CTI": [
                                {Category : "OpsTechIT"},
                                {Type : "Audio+Visual"},
                                {Item : "AV"}
                                ],
                        "images": [
                                "SpooScanner"
                                ],
                
                        "commonIssues": [
                                {3: "Issue with Connection", type : "TT"},
                                {5: "Camera Not Working", type : "TT"},
                                {9: "Issue with Image", type : "TT"},
                                {11: "Calibration", type : "TT"},
                                
                                ],
                        "tags": [
                                "SPOO", "SCANNER", "PACK", "IT", "AFE", "SLAM", "PROBLEM SOLVE", "PS"
                                ],
                        }, 
    

    ])

    const value = {
        itemsList: [itemsList, setitemsList],

    }


//     const [cart, setCart] = useState([])

    // const addCart = (id) =>{
    //     const check = cart.every(item =>{
    //         return item._id !== id
    //     })
    //     if(check){
    //         const data = products.filter(product =>{
    //             return product._id === id
    //         })
    //         setCart([...cart, ...data])
    //     }else{
    //         alert("The product has been added to cart.")
    //     }
    // }

//     useEffect(() =>{
//        const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
//        if(dataCart) setCart(dataCart)
//     },[])

//     useEffect(() =>{
//         localStorage.setItem('dataCart', JSON.stringify(cart))
//     },[cart])




//     const search = (e) => {
//         const search = e.target.value
//         const filtered = itemsList.filter((item) => {
//                 return item.tags.toLowerCase().includes(search.toLowerCase())
//         })
//         setitemsList(filtered)
//         }
        //in order for above to be used in the search bar, you need to add the following to the search bar
        //onChange={search}
        //but if used in a different componet should look like this 

        // const {search} = useContext(DataContext)
        // <input type="text" placeholder="Search" onChange={search} />



        const test = {
                itemsList: [itemsList, setitemsList],
        
            }

    return (
        <DataContext.Provider value={value} test={test}>
            {props.children}
        </DataContext.Provider>


    )
}


/*
"usefullLinks": [
                    {1: "https://www.apple.com/uk/macbook-pro-13/specs/"},
                    {2: "https://www.apple.com/uk/macbook-pro-13/specs/"},
                    {3: "https://www.apple.com/uk/macbook-pro-13/specs/"},
                    {4: "https://www.apple.com/uk/macbook-pro-13/specs/"},
                    {5: "https://www.apple.com/uk/macbook-pro-13/specs/"}
                    ],
            "workStation": [
                    {1: "PackStation"},
                    {2: "ProblemSolve"},
                    {3: "SLAM"}
                     ],
            "tags": [
                "laptop", "macbook", "apple", "computer", "tech", "electronics",
                "device", "gadget", "accessories", "osx", "pro", "retina"
            ],
            "requieredFields": [
                {1: "Serial Number", type : "text"},
                {2: "Asset Tag", type : "text"},
                {3: "Location", type : "text"},
                {4: "User", type : "text"},
                {5: "Issue", type : "text"},
                {6: "Description", type : "text"},
                {7: "Workstation", type : "text"},
                {8: "Other", type : "text"}
                ],

             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 101,
             "count": 1
         },

*/
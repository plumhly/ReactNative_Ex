//
//  PlumTest.m
//  MyApp
//
//  Created by plum on 2018/12/17.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "PlumTest.h"
#import <React/RCTLog.h>

@interface PlumTest ()

@end

@implementation PlumTest

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(printName:(NSString *) name) {
  RCTLogInfo(@"plum: %@", name);
}

RCT_EXPORT_METHOD(printDate:(NSDate *) date) {
  RCTLogInfo(@"plum date: %@", date);
}

RCT_EXPORT_METHOD(testCallBack: (RCTResponseSenderBlock)block) {
  RCTLogInfo(@"call Back");
  block(@[[NSNull null], @[@"PLUM"]]);
}

@end

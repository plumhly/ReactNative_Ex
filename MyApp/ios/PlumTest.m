//
//  PlumTest.m
//  MyApp
//
//  Created by plum on 2018/12/17.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "PlumTest.h"
#import <React/RCTLog.h>
#import <React/RCTUtils.h>
#import "RCTConvert+Plum.h"

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

//RCT_REMAP_METHOD(testPromissBlock, testPromissBlock:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
//  resolve(@"promiss Block");
//}

RCT_EXPORT_METHOD(testPromissBlock:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
  resolve(@"promiss-other Block");
//  NSError *error = [NSError errorWithDomain:NSNetServicesErrorDomain code:20 userInfo:nil];
//  reject(@"404", @"错误", error);
}

RCT_EXPORT_METHOD(testEnum:(UIPlum)plum) {
  RCTLogInfo(@"%@", @(plum));
}

RCT_EXPORT_METHOD(testEvent) {
  [self sendNoti];
}

- (void)sendNoti {
  [self sendEventWithName:@"PlumEvent" body:@{@"name": @"plums Event"}];
}

- (dispatch_queue_t)methodQueue {
  return dispatch_queue_create("plum.com", NULL);
}


- (NSDictionary *)constantsToExport {
  return @{@"UIPlumOne": @(UIPlumOne), @"UIPlumTwo": @(UIPlumTwo)};
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"PlumEvent"];
}

//- (void)startObserving {
//
//}
//
//- (void)stopObserving {
//
//}

@end

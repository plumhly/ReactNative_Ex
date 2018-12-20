//
//  RCTConvert+Plum.m
//  MyApp
//
//  Created by plum on 2018/12/19.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RCTConvert+Plum.h"
#import <React/RCTConvert.h>
#import "PlumTest.h"

@implementation RCTConvert (Plum)
RCT_ENUM_CONVERTER(UIPlum, (@{@"UIPlumOne": @(UIPlumOne), @"UIPlumTwo": @(UIPlumTwo)}), UIPlumOne, integerValue)

@end

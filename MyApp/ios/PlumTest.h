//
//  PlumTest.h
//  MyApp
//
//  Created by plum on 2018/12/17.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN


typedef NS_ENUM(NSInteger, UIPlum) {
  UIPlumOne,
  UIPlumTwo
};

@interface PlumTest : RCTEventEmitter <RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END

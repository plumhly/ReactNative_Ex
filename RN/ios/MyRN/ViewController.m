//
//  ViewController.m
//  MyRN
//
//  Created by plum on 2018/12/14.
//  Copyright © 2018 Tima. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    NSURL *jsLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    RCTRootView *view = [[RCTRootView alloc] initWithBundleURL:jsLocation moduleName:@"RNHighSores" initialProperties:@{@"scores": @[@{@"name": @"plum", @"value": @"56"}, @{@"name": @"libo", @"value": @"89"}]} launchOptions:nil];
    
    UIViewController *vc = [UIViewController new];
    vc.view = view;
    [self presentViewController:vc animated:YES completion:nil];
}


@end

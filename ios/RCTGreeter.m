//
//  RCTGreeter.m
//  maisonmata
//
//  Created by Hyacinthe Hamon on 21/5/20.
//

#import "RCTGreeter.h"
#import <React/RCTLog.h>

@implementation RCTGreeter

RCT_EXPORT_MODULE(Greeter);

RCT_EXPORT_METHOD(greet:(NSString *)name) {
  RCTLogInfo(@"Welcome, %@", name);
}

@end

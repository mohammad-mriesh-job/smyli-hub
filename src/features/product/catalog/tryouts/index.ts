import type {TryOut} from '../tryout.types'
import {tryout01} from './f01'
import {tryout02} from './f02'
import {tryout03} from './f03'
import {tryout04} from './f04'
import {tryout05} from './f05'
import {tryout06} from './f06'
import {tryout07} from './f07'
import {tryout08} from './f08'
import {tryout09} from './f09'
import {tryout10} from './f10'
import {tryout11} from './f11'
import {tryout12} from './f12'
import {tryout13} from './f13'
import {tryout14} from './f14'
import {tryout15} from './f15'
import {tryout16} from './f16'
import {tryout17} from './f17'
import {tryout18} from './f18'
import {tryout19} from './f19'
import {tryout20} from './f20'
import {tryout21} from './f21'
import {tryout22} from './f22'
import {tryout23} from './f23'
import {tryout24} from './f24'
import {tryout25} from './f25'
import {tryout26} from './f26'
import {tryout27} from './f27'
import {tryout28} from './f28'
import {tryout29} from './f29'
import {tryout30} from './f30'
import {tryout31} from './f31'
import {tryout32} from './f32'
import {tryout33} from './f33'
import {tryout34} from './f34'
import {tryout35} from './f35'
import {tryout36} from './f36'
import {tryout37} from './f37'
import {tryout38} from './f38'
import {tryout39} from './f39'
import {tryout40} from './f40'
import {tryout41} from './f41'
import {tryout42} from './f42'
import {tryout43} from './f43'
import {tryout44} from './f44'
import {tryout45} from './f45'
import {tryout46} from './f46'
import {tryout47} from './f47'
import {tryout48} from './f48'
import {tryout49} from './f49'
import {tryout50} from './f50'
import {tryout51} from './f51'
import {tryout52} from './f52'
import {tryout53} from './f53'
import {tryout54} from './f54'
import {tryout55} from './f55'
import {tryout56} from './f56'
import {tryout57} from './f57'
import {tryout58} from './f58'
import {tryout59} from './f59'
import {tryout60} from './f60'
import {tryout61} from './f61'
import {tryout62} from './f62'
import {tryout63} from './f63'
import {tryout64} from './f64'
import {tryout65} from './f65'
import {tryout66} from './f66'
import {tryout67} from './f67'
import {tryout68} from './f68'
import {tryout69} from './f69'
import {tryout70} from './f70'
import {tryout71} from './f71'
import {tryout72} from './f72'
import {tryout73} from './f73'

// Every feature's try-out, by feature id.
export const tryouts: Record<number, TryOut> = {
    1: tryout01,
    2: tryout02,
    3: tryout03,
    4: tryout04,
    5: tryout05,
    6: tryout06,
    7: tryout07,
    8: tryout08,
    9: tryout09,
    10: tryout10,
    11: tryout11,
    12: tryout12,
    13: tryout13,
    14: tryout14,
    15: tryout15,
    16: tryout16,
    17: tryout17,
    18: tryout18,
    19: tryout19,
    20: tryout20,
    21: tryout21,
    22: tryout22,
    23: tryout23,
    24: tryout24,
    25: tryout25,
    26: tryout26,
    27: tryout27,
    28: tryout28,
    29: tryout29,
    30: tryout30,
    31: tryout31,
    32: tryout32,
    33: tryout33,
    34: tryout34,
    35: tryout35,
    36: tryout36,
    37: tryout37,
    38: tryout38,
    39: tryout39,
    40: tryout40,
    41: tryout41,
    42: tryout42,
    43: tryout43,
    44: tryout44,
    45: tryout45,
    46: tryout46,
    47: tryout47,
    48: tryout48,
    49: tryout49,
    50: tryout50,
    51: tryout51,
    52: tryout52,
    53: tryout53,
    54: tryout54,
    55: tryout55,
    56: tryout56,
    57: tryout57,
    58: tryout58,
    59: tryout59,
    60: tryout60,
    61: tryout61,
    62: tryout62,
    63: tryout63,
    64: tryout64,
    65: tryout65,
    66: tryout66,
    67: tryout67,
    68: tryout68,
    69: tryout69,
    70: tryout70,
    71: tryout71,
    72: tryout72,
    73: tryout73
}

/** The try-out for a feature. Throws for an unknown feature id. */
export function tryoutFor(id: number): TryOut {
    const tryout = tryouts[id]
    if (!tryout) throw new Error(`Unknown feature id ${id}: no try-out exists for it`)
    return tryout
}

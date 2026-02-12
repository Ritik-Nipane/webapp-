var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env3) {
    return 1;
  }
  hasColors(count3, env3) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process2 extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process2.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd3) {
    this.#cwd = cwd3;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  _channel,
  _debugEnd,
  _debugProcess,
  _disconnect,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _handleQueue,
  _kill,
  _linkedBinding,
  _maxListeners,
  _pendingMessage,
  _preload_modules,
  _rawDebug,
  _send,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert,
  availableMemory,
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  disconnect,
  dlopen,
  domain,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime: hrtime3,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  mainModule,
  memoryUsage,
  moduleLoadList,
  nextTick,
  off,
  on,
  once,
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// .wrangler/tmp/pages-aUwJo3/bundledWorker-0.65754934895078.mjs
import { Writable } from "node:stream";
import { EventEmitter as EventEmitter2 } from "node:events";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
// @__NO_SIDE_EFFECTS__
function createNotImplementedError2(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError2, "createNotImplementedError");
__name2(createNotImplementedError2, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented2(name) {
  const fn = /* @__PURE__ */ __name2(() => {
    throw /* @__PURE__ */ createNotImplementedError2(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented2, "notImplemented");
__name2(notImplemented2, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");
__name2(notImplementedClass, "notImplementedClass");
var _timeOrigin2 = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow2 = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin2;
var nodeTiming2 = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry2 = class {
  static {
    __name(this, "PerformanceEntry");
  }
  static {
    __name2(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow2();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow2() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark3 = class PerformanceMark22 extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceMark2");
  }
  static {
    __name2(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure2 = class extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceMeasure");
  }
  static {
    __name2(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming2 = class extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  static {
    __name2(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList2 = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  static {
    __name2(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance2 = class {
  static {
    __name(this, "Performance");
  }
  static {
    __name2(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin2;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming2;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming2("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin2) {
      return _performanceNow2();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark3(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure2(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver2 = class {
  static {
    __name(this, "PerformanceObserver");
  }
  static {
    __name2(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance2();
globalThis.performance = performance2;
globalThis.Performance = Performance2;
globalThis.PerformanceEntry = PerformanceEntry2;
globalThis.PerformanceMark = PerformanceMark3;
globalThis.PerformanceMeasure = PerformanceMeasure2;
globalThis.PerformanceObserver = PerformanceObserver2;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList2;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming2;
var noop_default = Object.assign(() => {
}, { __unenv__: true });
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented2("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;
var workerdConsole = globalThis["console"];
var {
  assert: assert2,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;
globalThis.console = console_default;
var hrtime4 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hrtime22(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime2"), "hrtime"), { bigint: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function bigint2() {
  return BigInt(Date.now() * 1e6);
}, "bigint"), "bigint") });
var ReadStream2 = class {
  static {
    __name(this, "ReadStream");
  }
  static {
    __name2(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};
var WriteStream2 = class {
  static {
    __name(this, "WriteStream");
  }
  static {
    __name2(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env22) {
    return 1;
  }
  hasColors(count3, env22) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};
var NODE_VERSION2 = "22.14.0";
var Process2 = class _Process extends EventEmitter2 {
  static {
    __name(this, "_Process");
  }
  static {
    __name2(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter2.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream2(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream2(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream2(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd22) {
    this.#cwd = cwd22;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION2}`;
  }
  get versions() {
    return { node: NODE_VERSION2 };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw /* @__PURE__ */ createNotImplementedError2("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw /* @__PURE__ */ createNotImplementedError2("process.getActiveResourcesInfo");
  }
  exit() {
    throw /* @__PURE__ */ createNotImplementedError2("process.exit");
  }
  reallyExit() {
    throw /* @__PURE__ */ createNotImplementedError2("process.reallyExit");
  }
  kill() {
    throw /* @__PURE__ */ createNotImplementedError2("process.kill");
  }
  abort() {
    throw /* @__PURE__ */ createNotImplementedError2("process.abort");
  }
  dlopen() {
    throw /* @__PURE__ */ createNotImplementedError2("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw /* @__PURE__ */ createNotImplementedError2("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw /* @__PURE__ */ createNotImplementedError2("process.loadEnvFile");
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError2("process.disconnect");
  }
  cpuUsage() {
    throw /* @__PURE__ */ createNotImplementedError2("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw /* @__PURE__ */ createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw /* @__PURE__ */ createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw /* @__PURE__ */ createNotImplementedError2("process.initgroups");
  }
  openStdin() {
    throw /* @__PURE__ */ createNotImplementedError2("process.openStdin");
  }
  assert() {
    throw /* @__PURE__ */ createNotImplementedError2("process.assert");
  }
  binding() {
    throw /* @__PURE__ */ createNotImplementedError2("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented2("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented2("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented2("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented2("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented2("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented2("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name2(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
var globalProcess2 = globalThis["process"];
var getBuiltinModule2 = globalProcess2.getBuiltinModule;
var workerdProcess2 = getBuiltinModule2("node:process");
var unenvProcess2 = new Process2({
  env: globalProcess2.env,
  hrtime: hrtime4,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess2.nextTick
});
var { exit: exit2, features: features2, platform: platform2 } = workerdProcess2;
var {
  _channel: _channel2,
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _disconnect: _disconnect2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _handleQueue: _handleQueue2,
  _kill: _kill2,
  _linkedBinding: _linkedBinding2,
  _maxListeners: _maxListeners2,
  _pendingMessage: _pendingMessage2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _send: _send2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  assert: assert22,
  availableMemory: availableMemory2,
  binding: binding2,
  channel: channel2,
  chdir: chdir2,
  config: config2,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd2,
  debugPort: debugPort2,
  disconnect: disconnect2,
  dlopen: dlopen2,
  domain: domain2,
  emit: emit2,
  emitWarning: emitWarning2,
  env: env2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exitCode: exitCode2,
  finalization: finalization2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getegid: getegid2,
  geteuid: geteuid2,
  getgid: getgid2,
  getgroups: getgroups2,
  getMaxListeners: getMaxListeners2,
  getuid: getuid2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  hrtime: hrtime32,
  initgroups: initgroups2,
  kill: kill2,
  listenerCount: listenerCount2,
  listeners: listeners2,
  loadEnvFile: loadEnvFile2,
  mainModule: mainModule2,
  memoryUsage: memoryUsage2,
  moduleLoadList: moduleLoadList2,
  nextTick: nextTick2,
  off: off2,
  on: on2,
  once: once2,
  openStdin: openStdin2,
  permission: permission2,
  pid: pid2,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  reallyExit: reallyExit2,
  ref: ref2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  send: send2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  setuid: setuid2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  sourceMapsEnabled: sourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  throwDeprecation: throwDeprecation2,
  title: title2,
  traceDeprecation: traceDeprecation2,
  umask: umask2,
  unref: unref2,
  uptime: uptime2,
  version: version2,
  versions: versions2
} = unenvProcess2;
var _process2 = {
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  loadEnvFile: loadEnvFile2,
  sourceMapsEnabled: sourceMapsEnabled2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  chdir: chdir2,
  config: config2,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  availableMemory: availableMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd2,
  debugPort: debugPort2,
  dlopen: dlopen2,
  disconnect: disconnect2,
  emit: emit2,
  emitWarning: emitWarning2,
  env: env2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exit: exit2,
  finalization: finalization2,
  features: features2,
  getBuiltinModule: getBuiltinModule2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getMaxListeners: getMaxListeners2,
  hrtime: hrtime32,
  kill: kill2,
  listeners: listeners2,
  listenerCount: listenerCount2,
  memoryUsage: memoryUsage2,
  nextTick: nextTick2,
  on: on2,
  off: off2,
  once: once2,
  pid: pid2,
  platform: platform2,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  title: title2,
  throwDeprecation: throwDeprecation2,
  traceDeprecation: traceDeprecation2,
  umask: umask2,
  uptime: uptime2,
  version: version2,
  versions: versions2,
  // @ts-expect-error old API
  domain: domain2,
  initgroups: initgroups2,
  moduleLoadList: moduleLoadList2,
  reallyExit: reallyExit2,
  openStdin: openStdin2,
  assert: assert22,
  binding: binding2,
  send: send2,
  exitCode: exitCode2,
  channel: channel2,
  getegid: getegid2,
  geteuid: geteuid2,
  getgid: getgid2,
  getgroups: getgroups2,
  getuid: getuid2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setuid: setuid2,
  permission: permission2,
  mainModule: mainModule2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _maxListeners: _maxListeners2,
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _kill: _kill2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  _disconnect: _disconnect2,
  _handleQueue: _handleQueue2,
  _pendingMessage: _pendingMessage2,
  _channel: _channel2,
  _send: _send2,
  _linkedBinding: _linkedBinding2
};
var process_default2 = _process2;
globalThis.process = process_default2;
var wt = Object.defineProperty;
var Fe = /* @__PURE__ */ __name2((e) => {
  throw TypeError(e);
}, "Fe");
var yt = /* @__PURE__ */ __name2((e, t, s) => t in e ? wt(e, t, { enumerable: true, configurable: true, writable: true, value: s }) : e[t] = s, "yt");
var p = /* @__PURE__ */ __name2((e, t, s) => yt(e, typeof t != "symbol" ? t + "" : t, s), "p");
var Ne = /* @__PURE__ */ __name2((e, t, s) => t.has(e) || Fe("Cannot " + s), "Ne");
var a = /* @__PURE__ */ __name2((e, t, s) => (Ne(e, t, "read from private field"), s ? s.call(e) : t.get(e)), "a");
var v = /* @__PURE__ */ __name2((e, t, s) => t.has(e) ? Fe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), "v");
var f = /* @__PURE__ */ __name2((e, t, s, i) => (Ne(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s), "f");
var g = /* @__PURE__ */ __name2((e, t, s) => (Ne(e, t, "access private method"), s), "g");
var Le = /* @__PURE__ */ __name2((e, t, s, i) => ({ set _(r) {
  f(e, t, r, s);
}, get _() {
  return a(e, t, i);
} }), "Le");
var Ue = /* @__PURE__ */ __name2((e, t, s) => (i, r) => {
  let n = -1;
  return o(0);
  async function o(l) {
    if (l <= n) throw new Error("next() called multiple times");
    n = l;
    let d, c = false, h;
    if (e[l] ? (h = e[l][0][0], i.req.routeIndex = l) : h = l === e.length && r || void 0, h) try {
      d = await h(i, () => o(l + 1));
    } catch (u) {
      if (u instanceof Error && t) i.error = u, d = await t(u, i), c = true;
      else throw u;
    }
    else i.finalized === false && s && (d = await s(i));
    return d && (i.finalized === false || c) && (i.res = d), i;
  }
  __name(o, "o");
  __name2(o, "o");
}, "Ue");
var bt = /* @__PURE__ */ Symbol();
var xt = /* @__PURE__ */ __name2(async (e, t = /* @__PURE__ */ Object.create(null)) => {
  const { all: s = false, dot: i = false } = t, n = (e instanceof it ? e.raw.headers : e.headers).get("Content-Type");
  return n != null && n.startsWith("multipart/form-data") || n != null && n.startsWith("application/x-www-form-urlencoded") ? Et(e, { all: s, dot: i }) : {};
}, "xt");
async function Et(e, t) {
  const s = await e.formData();
  return s ? Rt(s, t) : {};
}
__name(Et, "Et");
__name2(Et, "Et");
function Rt(e, t) {
  const s = /* @__PURE__ */ Object.create(null);
  return e.forEach((i, r) => {
    t.all || r.endsWith("[]") ? Ot(s, r, i) : s[r] = i;
  }), t.dot && Object.entries(s).forEach(([i, r]) => {
    i.includes(".") && (Tt(s, i, r), delete s[i]);
  }), s;
}
__name(Rt, "Rt");
__name2(Rt, "Rt");
var Ot = /* @__PURE__ */ __name2((e, t, s) => {
  e[t] !== void 0 ? Array.isArray(e[t]) ? e[t].push(s) : e[t] = [e[t], s] : t.endsWith("[]") ? e[t] = [s] : e[t] = s;
}, "Ot");
var Tt = /* @__PURE__ */ __name2((e, t, s) => {
  let i = e;
  const r = t.split(".");
  r.forEach((n, o) => {
    o === r.length - 1 ? i[n] = s : ((!i[n] || typeof i[n] != "object" || Array.isArray(i[n]) || i[n] instanceof File) && (i[n] = /* @__PURE__ */ Object.create(null)), i = i[n]);
  });
}, "Tt");
var Qe = /* @__PURE__ */ __name2((e) => {
  const t = e.split("/");
  return t[0] === "" && t.shift(), t;
}, "Qe");
var jt = /* @__PURE__ */ __name2((e) => {
  const { groups: t, path: s } = St(e), i = Qe(s);
  return Ct(i, t);
}, "jt");
var St = /* @__PURE__ */ __name2((e) => {
  const t = [];
  return e = e.replace(/\{[^}]+\}/g, (s, i) => {
    const r = `@${i}`;
    return t.push([r, s]), r;
  }), { groups: t, path: e };
}, "St");
var Ct = /* @__PURE__ */ __name2((e, t) => {
  for (let s = t.length - 1; s >= 0; s--) {
    const [i] = t[s];
    for (let r = e.length - 1; r >= 0; r--) if (e[r].includes(i)) {
      e[r] = e[r].replace(i, t[s][1]);
      break;
    }
  }
  return e;
}, "Ct");
var Oe = {};
var kt = /* @__PURE__ */ __name2((e, t) => {
  if (e === "*") return "*";
  const s = e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (s) {
    const i = `${e}#${t}`;
    return Oe[i] || (s[2] ? Oe[i] = t && t[0] !== ":" && t[0] !== "*" ? [i, s[1], new RegExp(`^${s[2]}(?=/${t})`)] : [e, s[1], new RegExp(`^${s[2]}$`)] : Oe[i] = [e, s[1], true]), Oe[i];
  }
  return null;
}, "kt");
var De = /* @__PURE__ */ __name2((e, t) => {
  try {
    return t(e);
  } catch {
    return e.replace(/(?:%[0-9A-Fa-f]{2})+/g, (s) => {
      try {
        return t(s);
      } catch {
        return s;
      }
    });
  }
}, "De");
var At = /* @__PURE__ */ __name2((e) => De(e, decodeURI), "At");
var Ze = /* @__PURE__ */ __name2((e) => {
  const t = e.url, s = t.indexOf("/", t.indexOf(":") + 4);
  let i = s;
  for (; i < t.length; i++) {
    const r = t.charCodeAt(i);
    if (r === 37) {
      const n = t.indexOf("?", i), o = t.indexOf("#", i), l = n === -1 ? o === -1 ? void 0 : o : o === -1 ? n : Math.min(n, o), d = t.slice(s, l);
      return At(d.includes("%25") ? d.replace(/%25/g, "%2525") : d);
    } else if (r === 63 || r === 35) break;
  }
  return t.slice(s, i);
}, "Ze");
var Pt = /* @__PURE__ */ __name2((e) => {
  const t = Ze(e);
  return t.length > 1 && t.at(-1) === "/" ? t.slice(0, -1) : t;
}, "Pt");
var se = /* @__PURE__ */ __name2((e, t, ...s) => (s.length && (t = se(t, ...s)), `${(e == null ? void 0 : e[0]) === "/" ? "" : "/"}${e}${t === "/" ? "" : `${(e == null ? void 0 : e.at(-1)) === "/" ? "" : "/"}${(t == null ? void 0 : t[0]) === "/" ? t.slice(1) : t}`}`), "se");
var et = /* @__PURE__ */ __name2((e) => {
  if (e.charCodeAt(e.length - 1) !== 63 || !e.includes(":")) return null;
  const t = e.split("/"), s = [];
  let i = "";
  return t.forEach((r) => {
    if (r !== "" && !/\:/.test(r)) i += "/" + r;
    else if (/\:/.test(r)) if (/\?/.test(r)) {
      s.length === 0 && i === "" ? s.push("/") : s.push(i);
      const n = r.replace("?", "");
      i += "/" + n, s.push(i);
    } else i += "/" + r;
  }), s.filter((r, n, o) => o.indexOf(r) === n);
}, "et");
var Ie = /* @__PURE__ */ __name2((e) => /[%+]/.test(e) ? (e.indexOf("+") !== -1 && (e = e.replace(/\+/g, " ")), e.indexOf("%") !== -1 ? De(e, st) : e) : e, "Ie");
var tt = /* @__PURE__ */ __name2((e, t, s) => {
  let i;
  if (!s && t && !/[%+]/.test(t)) {
    let o = e.indexOf("?", 8);
    if (o === -1) return;
    for (e.startsWith(t, o + 1) || (o = e.indexOf(`&${t}`, o + 1)); o !== -1; ) {
      const l = e.charCodeAt(o + t.length + 1);
      if (l === 61) {
        const d = o + t.length + 2, c = e.indexOf("&", d);
        return Ie(e.slice(d, c === -1 ? void 0 : c));
      } else if (l == 38 || isNaN(l)) return "";
      o = e.indexOf(`&${t}`, o + 1);
    }
    if (i = /[%+]/.test(e), !i) return;
  }
  const r = {};
  i ?? (i = /[%+]/.test(e));
  let n = e.indexOf("?", 8);
  for (; n !== -1; ) {
    const o = e.indexOf("&", n + 1);
    let l = e.indexOf("=", n);
    l > o && o !== -1 && (l = -1);
    let d = e.slice(n + 1, l === -1 ? o === -1 ? void 0 : o : l);
    if (i && (d = Ie(d)), n = o, d === "") continue;
    let c;
    l === -1 ? c = "" : (c = e.slice(l + 1, o === -1 ? void 0 : o), i && (c = Ie(c))), s ? (r[d] && Array.isArray(r[d]) || (r[d] = []), r[d].push(c)) : r[d] ?? (r[d] = c);
  }
  return t ? r[t] : r;
}, "tt");
var Nt = tt;
var It = /* @__PURE__ */ __name2((e, t) => tt(e, t, true), "It");
var st = decodeURIComponent;
var ze = /* @__PURE__ */ __name2((e) => De(e, st), "ze");
var ne;
var S;
var $;
var rt;
var nt;
var Me;
var U;
var Ke;
var it = (Ke = class {
  static {
    __name(this, "Ke");
  }
  static {
    __name2(this, "Ke");
  }
  constructor(e, t = "/", s = [[]]) {
    v(this, $);
    p(this, "raw");
    v(this, ne);
    v(this, S);
    p(this, "routeIndex", 0);
    p(this, "path");
    p(this, "bodyCache", {});
    v(this, U, (e2) => {
      const { bodyCache: t2, raw: s2 } = this, i = t2[e2];
      if (i) return i;
      const r = Object.keys(t2)[0];
      return r ? t2[r].then((n) => (r === "json" && (n = JSON.stringify(n)), new Response(n)[e2]())) : t2[e2] = s2[e2]();
    });
    this.raw = e, this.path = t, f(this, S, s), f(this, ne, {});
  }
  param(e) {
    return e ? g(this, $, rt).call(this, e) : g(this, $, nt).call(this);
  }
  query(e) {
    return Nt(this.url, e);
  }
  queries(e) {
    return It(this.url, e);
  }
  header(e) {
    if (e) return this.raw.headers.get(e) ?? void 0;
    const t = {};
    return this.raw.headers.forEach((s, i) => {
      t[i] = s;
    }), t;
  }
  async parseBody(e) {
    var t;
    return (t = this.bodyCache).parsedBody ?? (t.parsedBody = await xt(this, e));
  }
  json() {
    return a(this, U).call(this, "text").then((e) => JSON.parse(e));
  }
  text() {
    return a(this, U).call(this, "text");
  }
  arrayBuffer() {
    return a(this, U).call(this, "arrayBuffer");
  }
  blob() {
    return a(this, U).call(this, "blob");
  }
  formData() {
    return a(this, U).call(this, "formData");
  }
  addValidatedData(e, t) {
    a(this, ne)[e] = t;
  }
  valid(e) {
    return a(this, ne)[e];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [bt]() {
    return a(this, S);
  }
  get matchedRoutes() {
    return a(this, S)[0].map(([[, e]]) => e);
  }
  get routePath() {
    return a(this, S)[0].map(([[, e]]) => e)[this.routeIndex].path;
  }
}, ne = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakSet(), rt = /* @__PURE__ */ __name2(function(e) {
  const t = a(this, S)[0][this.routeIndex][1][e], s = g(this, $, Me).call(this, t);
  return s && /\%/.test(s) ? ze(s) : s;
}, "rt"), nt = /* @__PURE__ */ __name2(function() {
  const e = {}, t = Object.keys(a(this, S)[0][this.routeIndex][1]);
  for (const s of t) {
    const i = g(this, $, Me).call(this, a(this, S)[0][this.routeIndex][1][s]);
    i !== void 0 && (e[s] = /\%/.test(i) ? ze(i) : i);
  }
  return e;
}, "nt"), Me = /* @__PURE__ */ __name2(function(e) {
  return a(this, S)[1] ? a(this, S)[1][e] : e;
}, "Me"), U = /* @__PURE__ */ new WeakMap(), Ke);
var _t = { Stringify: 1 };
var at = /* @__PURE__ */ __name2(async (e, t, s, i, r) => {
  typeof e == "object" && !(e instanceof String) && (e instanceof Promise || (e = e.toString()), e instanceof Promise && (e = await e));
  const n = e.callbacks;
  return n != null && n.length ? (r ? r[0] += e : r = [e], Promise.all(n.map((l) => l({ phase: t, buffer: r, context: i }))).then((l) => Promise.all(l.filter(Boolean).map((d) => at(d, t, false, i, r))).then(() => r[0]))) : Promise.resolve(e);
}, "at");
var Mt = "text/plain; charset=UTF-8";
var _e = /* @__PURE__ */ __name2((e, t) => ({ "Content-Type": e, ...t }), "_e");
var ge;
var me;
var _;
var ae;
var M;
var j;
var we;
var oe;
var ce;
var Y;
var ye;
var be;
var z;
var ie;
var Ge;
var Dt = (Ge = class {
  static {
    __name(this, "Ge");
  }
  static {
    __name2(this, "Ge");
  }
  constructor(e, t) {
    v(this, z);
    v(this, ge);
    v(this, me);
    p(this, "env", {});
    v(this, _);
    p(this, "finalized", false);
    p(this, "error");
    v(this, ae);
    v(this, M);
    v(this, j);
    v(this, we);
    v(this, oe);
    v(this, ce);
    v(this, Y);
    v(this, ye);
    v(this, be);
    p(this, "render", (...e2) => (a(this, oe) ?? f(this, oe, (t2) => this.html(t2)), a(this, oe).call(this, ...e2)));
    p(this, "setLayout", (e2) => f(this, we, e2));
    p(this, "getLayout", () => a(this, we));
    p(this, "setRenderer", (e2) => {
      f(this, oe, e2);
    });
    p(this, "header", (e2, t2, s) => {
      this.finalized && f(this, j, new Response(a(this, j).body, a(this, j)));
      const i = a(this, j) ? a(this, j).headers : a(this, Y) ?? f(this, Y, new Headers());
      t2 === void 0 ? i.delete(e2) : s != null && s.append ? i.append(e2, t2) : i.set(e2, t2);
    });
    p(this, "status", (e2) => {
      f(this, ae, e2);
    });
    p(this, "set", (e2, t2) => {
      a(this, _) ?? f(this, _, /* @__PURE__ */ new Map()), a(this, _).set(e2, t2);
    });
    p(this, "get", (e2) => a(this, _) ? a(this, _).get(e2) : void 0);
    p(this, "newResponse", (...e2) => g(this, z, ie).call(this, ...e2));
    p(this, "body", (e2, t2, s) => g(this, z, ie).call(this, e2, t2, s));
    p(this, "text", (e2, t2, s) => !a(this, Y) && !a(this, ae) && !t2 && !s && !this.finalized ? new Response(e2) : g(this, z, ie).call(this, e2, t2, _e(Mt, s)));
    p(this, "json", (e2, t2, s) => g(this, z, ie).call(this, JSON.stringify(e2), t2, _e("application/json", s)));
    p(this, "html", (e2, t2, s) => {
      const i = /* @__PURE__ */ __name2((r) => g(this, z, ie).call(this, r, t2, _e("text/html; charset=UTF-8", s)), "i");
      return typeof e2 == "object" ? at(e2, _t.Stringify, false, {}).then(i) : i(e2);
    });
    p(this, "redirect", (e2, t2) => {
      const s = String(e2);
      return this.header("Location", /[^\x00-\xFF]/.test(s) ? encodeURI(s) : s), this.newResponse(null, t2 ?? 302);
    });
    p(this, "notFound", () => (a(this, ce) ?? f(this, ce, () => new Response()), a(this, ce).call(this, this)));
    f(this, ge, e), t && (f(this, M, t.executionCtx), this.env = t.env, f(this, ce, t.notFoundHandler), f(this, be, t.path), f(this, ye, t.matchResult));
  }
  get req() {
    return a(this, me) ?? f(this, me, new it(a(this, ge), a(this, be), a(this, ye))), a(this, me);
  }
  get event() {
    if (a(this, M) && "respondWith" in a(this, M)) return a(this, M);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (a(this, M)) return a(this, M);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return a(this, j) || f(this, j, new Response(null, { headers: a(this, Y) ?? f(this, Y, new Headers()) }));
  }
  set res(e) {
    if (a(this, j) && e) {
      e = new Response(e.body, e);
      for (const [t, s] of a(this, j).headers.entries()) if (t !== "content-type") if (t === "set-cookie") {
        const i = a(this, j).headers.getSetCookie();
        e.headers.delete("set-cookie");
        for (const r of i) e.headers.append("set-cookie", r);
      } else e.headers.set(t, s);
    }
    f(this, j, e), this.finalized = true;
  }
  get var() {
    return a(this, _) ? Object.fromEntries(a(this, _)) : {};
  }
}, ge = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakSet(), ie = /* @__PURE__ */ __name2(function(e, t, s) {
  const i = a(this, j) ? new Headers(a(this, j).headers) : a(this, Y) ?? new Headers();
  if (typeof t == "object" && "headers" in t) {
    const n = t.headers instanceof Headers ? t.headers : new Headers(t.headers);
    for (const [o, l] of n) o.toLowerCase() === "set-cookie" ? i.append(o, l) : i.set(o, l);
  }
  if (s) for (const [n, o] of Object.entries(s)) if (typeof o == "string") i.set(n, o);
  else {
    i.delete(n);
    for (const l of o) i.append(n, l);
  }
  const r = typeof t == "number" ? t : (t == null ? void 0 : t.status) ?? a(this, ae);
  return new Response(e, { status: r, headers: i });
}, "ie"), Ge);
var b = "ALL";
var Ht = "all";
var $t = ["get", "post", "put", "delete", "options", "patch"];
var ot = "Can not add a route since the matcher is already built.";
var ct = class extends Error {
  static {
    __name(this, "ct");
  }
  static {
    __name2(this, "ct");
  }
};
var Ft = "__COMPOSED_HANDLER";
var Lt = /* @__PURE__ */ __name2((e) => e.text("404 Not Found", 404), "Lt");
var We = /* @__PURE__ */ __name2((e, t) => {
  if ("getResponse" in e) {
    const s = e.getResponse();
    return t.newResponse(s.body, s);
  }
  return console.error(e), t.text("Internal Server Error", 500);
}, "We");
var C;
var x;
var lt;
var k;
var G;
var Te;
var je;
var le;
var Ut = (le = class {
  static {
    __name(this, "le");
  }
  static {
    __name2(this, "le");
  }
  constructor(t = {}) {
    v(this, x);
    p(this, "get");
    p(this, "post");
    p(this, "put");
    p(this, "delete");
    p(this, "options");
    p(this, "patch");
    p(this, "all");
    p(this, "on");
    p(this, "use");
    p(this, "router");
    p(this, "getPath");
    p(this, "_basePath", "/");
    v(this, C, "/");
    p(this, "routes", []);
    v(this, k, Lt);
    p(this, "errorHandler", We);
    p(this, "onError", (t2) => (this.errorHandler = t2, this));
    p(this, "notFound", (t2) => (f(this, k, t2), this));
    p(this, "fetch", (t2, ...s) => g(this, x, je).call(this, t2, s[1], s[0], t2.method));
    p(this, "request", (t2, s, i2, r2) => t2 instanceof Request ? this.fetch(s ? new Request(t2, s) : t2, i2, r2) : (t2 = t2.toString(), this.fetch(new Request(/^https?:\/\//.test(t2) ? t2 : `http://localhost${se("/", t2)}`, s), i2, r2)));
    p(this, "fire", () => {
      addEventListener("fetch", (t2) => {
        t2.respondWith(g(this, x, je).call(this, t2.request, t2, void 0, t2.request.method));
      });
    });
    [...$t, Ht].forEach((n) => {
      this[n] = (o, ...l) => (typeof o == "string" ? f(this, C, o) : g(this, x, G).call(this, n, a(this, C), o), l.forEach((d) => {
        g(this, x, G).call(this, n, a(this, C), d);
      }), this);
    }), this.on = (n, o, ...l) => {
      for (const d of [o].flat()) {
        f(this, C, d);
        for (const c of [n].flat()) l.map((h) => {
          g(this, x, G).call(this, c.toUpperCase(), a(this, C), h);
        });
      }
      return this;
    }, this.use = (n, ...o) => (typeof n == "string" ? f(this, C, n) : (f(this, C, "*"), o.unshift(n)), o.forEach((l) => {
      g(this, x, G).call(this, b, a(this, C), l);
    }), this);
    const { strict: i, ...r } = t;
    Object.assign(this, r), this.getPath = i ?? true ? t.getPath ?? Ze : Pt;
  }
  route(t, s) {
    const i = this.basePath(t);
    return s.routes.map((r) => {
      var o;
      let n;
      s.errorHandler === We ? n = r.handler : (n = /* @__PURE__ */ __name2(async (l, d) => (await Ue([], s.errorHandler)(l, () => r.handler(l, d))).res, "n"), n[Ft] = r.handler), g(o = i, x, G).call(o, r.method, r.path, n);
    }), this;
  }
  basePath(t) {
    const s = g(this, x, lt).call(this);
    return s._basePath = se(this._basePath, t), s;
  }
  mount(t, s, i) {
    let r, n;
    i && (typeof i == "function" ? n = i : (n = i.optionHandler, i.replaceRequest === false ? r = /* @__PURE__ */ __name2((d) => d, "r") : r = i.replaceRequest));
    const o = n ? (d) => {
      const c = n(d);
      return Array.isArray(c) ? c : [c];
    } : (d) => {
      let c;
      try {
        c = d.executionCtx;
      } catch {
      }
      return [d.env, c];
    };
    r || (r = (() => {
      const d = se(this._basePath, t), c = d === "/" ? 0 : d.length;
      return (h) => {
        const u = new URL(h.url);
        return u.pathname = u.pathname.slice(c) || "/", new Request(u, h);
      };
    })());
    const l = /* @__PURE__ */ __name2(async (d, c) => {
      const h = await s(r(d.req.raw), ...o(d));
      if (h) return h;
      await c();
    }, "l");
    return g(this, x, G).call(this, b, se(t, "*"), l), this;
  }
}, C = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakSet(), lt = /* @__PURE__ */ __name2(function() {
  const t = new le({ router: this.router, getPath: this.getPath });
  return t.errorHandler = this.errorHandler, f(t, k, a(this, k)), t.routes = this.routes, t;
}, "lt"), k = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ __name2(function(t, s, i) {
  t = t.toUpperCase(), s = se(this._basePath, s);
  const r = { basePath: this._basePath, path: s, method: t, handler: i };
  this.router.add(t, s, [i, r]), this.routes.push(r);
}, "G"), Te = /* @__PURE__ */ __name2(function(t, s) {
  if (t instanceof Error) return this.errorHandler(t, s);
  throw t;
}, "Te"), je = /* @__PURE__ */ __name2(function(t, s, i, r) {
  if (r === "HEAD") return (async () => new Response(null, await g(this, x, je).call(this, t, s, i, "GET")))();
  const n = this.getPath(t, { env: i }), o = this.router.match(r, n), l = new Dt(t, { path: n, matchResult: o, env: i, executionCtx: s, notFoundHandler: a(this, k) });
  if (o[0].length === 1) {
    let c;
    try {
      c = o[0][0][0][0](l, async () => {
        l.res = await a(this, k).call(this, l);
      });
    } catch (h) {
      return g(this, x, Te).call(this, h, l);
    }
    return c instanceof Promise ? c.then((h) => h || (l.finalized ? l.res : a(this, k).call(this, l))).catch((h) => g(this, x, Te).call(this, h, l)) : c ?? a(this, k).call(this, l);
  }
  const d = Ue(o[0], this.errorHandler, a(this, k));
  return (async () => {
    try {
      const c = await d(l);
      if (!c.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
      return c.res;
    } catch (c) {
      return g(this, x, Te).call(this, c, l);
    }
  })();
}, "je"), le);
var dt = [];
function zt(e, t) {
  const s = this.buildAllMatchers(), i = /* @__PURE__ */ __name2(((r, n) => {
    const o = s[r] || s[b], l = o[2][n];
    if (l) return l;
    const d = n.match(o[0]);
    if (!d) return [[], dt];
    const c = d.indexOf("", 1);
    return [o[1][c], d];
  }), "i");
  return this.match = i, i(e, t);
}
__name(zt, "zt");
__name2(zt, "zt");
var Ce = "[^/]+";
var pe = ".*";
var ve = "(?:|/.*)";
var re = /* @__PURE__ */ Symbol();
var Wt = new Set(".\\+*[^]$()");
function Bt(e, t) {
  return e.length === 1 ? t.length === 1 ? e < t ? -1 : 1 : -1 : t.length === 1 || e === pe || e === ve ? 1 : t === pe || t === ve ? -1 : e === Ce ? 1 : t === Ce ? -1 : e.length === t.length ? e < t ? -1 : 1 : t.length - e.length;
}
__name(Bt, "Bt");
__name2(Bt, "Bt");
var J;
var X;
var A;
var ee;
var qt = (ee = class {
  static {
    __name(this, "ee");
  }
  static {
    __name2(this, "ee");
  }
  constructor() {
    v(this, J);
    v(this, X);
    v(this, A, /* @__PURE__ */ Object.create(null));
  }
  insert(t, s, i, r, n) {
    if (t.length === 0) {
      if (a(this, J) !== void 0) throw re;
      if (n) return;
      f(this, J, s);
      return;
    }
    const [o, ...l] = t, d = o === "*" ? l.length === 0 ? ["", "", pe] : ["", "", Ce] : o === "/*" ? ["", "", ve] : o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let c;
    if (d) {
      const h = d[1];
      let u = d[2] || Ce;
      if (h && d[2] && (u === ".*" || (u = u.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(u)))) throw re;
      if (c = a(this, A)[u], !c) {
        if (Object.keys(a(this, A)).some((w) => w !== pe && w !== ve)) throw re;
        if (n) return;
        c = a(this, A)[u] = new ee(), h !== "" && f(c, X, r.varIndex++);
      }
      !n && h !== "" && i.push([h, a(c, X)]);
    } else if (c = a(this, A)[o], !c) {
      if (Object.keys(a(this, A)).some((h) => h.length > 1 && h !== pe && h !== ve)) throw re;
      if (n) return;
      c = a(this, A)[o] = new ee();
    }
    c.insert(l, s, i, r, n);
  }
  buildRegExpStr() {
    const s = Object.keys(a(this, A)).sort(Bt).map((i) => {
      const r = a(this, A)[i];
      return (typeof a(r, X) == "number" ? `(${i})@${a(r, X)}` : Wt.has(i) ? `\\${i}` : i) + r.buildRegExpStr();
    });
    return typeof a(this, J) == "number" && s.unshift(`#${a(this, J)}`), s.length === 0 ? "" : s.length === 1 ? s[0] : "(?:" + s.join("|") + ")";
  }
}, J = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), ee);
var ke;
var xe;
var Ve;
var Kt = (Ve = class {
  static {
    __name(this, "Ve");
  }
  static {
    __name2(this, "Ve");
  }
  constructor() {
    v(this, ke, { varIndex: 0 });
    v(this, xe, new qt());
  }
  insert(e, t, s) {
    const i = [], r = [];
    for (let o = 0; ; ) {
      let l = false;
      if (e = e.replace(/\{[^}]+\}/g, (d) => {
        const c = `@\\${o}`;
        return r[o] = [c, d], o++, l = true, c;
      }), !l) break;
    }
    const n = e.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let o = r.length - 1; o >= 0; o--) {
      const [l] = r[o];
      for (let d = n.length - 1; d >= 0; d--) if (n[d].indexOf(l) !== -1) {
        n[d] = n[d].replace(l, r[o][1]);
        break;
      }
    }
    return a(this, xe).insert(n, t, i, a(this, ke), s), i;
  }
  buildRegExp() {
    let e = a(this, xe).buildRegExpStr();
    if (e === "") return [/^$/, [], []];
    let t = 0;
    const s = [], i = [];
    return e = e.replace(/#(\d+)|@(\d+)|\.\*\$/g, (r, n, o) => n !== void 0 ? (s[++t] = Number(n), "$()") : (o !== void 0 && (i[Number(o)] = ++t), "")), [new RegExp(`^${e}`), s, i];
  }
}, ke = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), Ve);
var Gt = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var Se = /* @__PURE__ */ Object.create(null);
function ht(e) {
  return Se[e] ?? (Se[e] = new RegExp(e === "*" ? "" : `^${e.replace(/\/\*$|([.\\+*[^\]$()])/g, (t, s) => s ? `\\${s}` : "(?:|/.*)")}$`));
}
__name(ht, "ht");
__name2(ht, "ht");
function Vt() {
  Se = /* @__PURE__ */ Object.create(null);
}
__name(Vt, "Vt");
__name2(Vt, "Vt");
function Yt(e) {
  var c;
  const t = new Kt(), s = [];
  if (e.length === 0) return Gt;
  const i = e.map((h) => [!/\*|\/:/.test(h[0]), ...h]).sort(([h, u], [w, y]) => h ? 1 : w ? -1 : u.length - y.length), r = /* @__PURE__ */ Object.create(null);
  for (let h = 0, u = -1, w = i.length; h < w; h++) {
    const [y, E, P] = i[h];
    y ? r[E] = [P.map(([R]) => [R, /* @__PURE__ */ Object.create(null)]), dt] : u++;
    let m;
    try {
      m = t.insert(E, u, y);
    } catch (R) {
      throw R === re ? new ct(E) : R;
    }
    y || (s[u] = P.map(([R, F]) => {
      const Ee = /* @__PURE__ */ Object.create(null);
      for (F -= 1; F >= 0; F--) {
        const [Re, N] = m[F];
        Ee[Re] = N;
      }
      return [R, Ee];
    }));
  }
  const [n, o, l] = t.buildRegExp();
  for (let h = 0, u = s.length; h < u; h++) for (let w = 0, y = s[h].length; w < y; w++) {
    const E = (c = s[h][w]) == null ? void 0 : c[1];
    if (!E) continue;
    const P = Object.keys(E);
    for (let m = 0, R = P.length; m < R; m++) E[P[m]] = l[E[P[m]]];
  }
  const d = [];
  for (const h in o) d[h] = s[o[h]];
  return [n, d, r];
}
__name(Yt, "Yt");
__name2(Yt, "Yt");
function te(e, t) {
  if (e) {
    for (const s of Object.keys(e).sort((i, r) => r.length - i.length)) if (ht(s).test(t)) return [...e[s]];
  }
}
__name(te, "te");
__name2(te, "te");
var W;
var B;
var Ae;
var ut;
var Ye;
var Jt = (Ye = class {
  static {
    __name(this, "Ye");
  }
  static {
    __name2(this, "Ye");
  }
  constructor() {
    v(this, Ae);
    p(this, "name", "RegExpRouter");
    v(this, W);
    v(this, B);
    p(this, "match", zt);
    f(this, W, { [b]: /* @__PURE__ */ Object.create(null) }), f(this, B, { [b]: /* @__PURE__ */ Object.create(null) });
  }
  add(e, t, s) {
    var l;
    const i = a(this, W), r = a(this, B);
    if (!i || !r) throw new Error(ot);
    i[e] || [i, r].forEach((d) => {
      d[e] = /* @__PURE__ */ Object.create(null), Object.keys(d[b]).forEach((c) => {
        d[e][c] = [...d[b][c]];
      });
    }), t === "/*" && (t = "*");
    const n = (t.match(/\/:/g) || []).length;
    if (/\*$/.test(t)) {
      const d = ht(t);
      e === b ? Object.keys(i).forEach((c) => {
        var h;
        (h = i[c])[t] || (h[t] = te(i[c], t) || te(i[b], t) || []);
      }) : (l = i[e])[t] || (l[t] = te(i[e], t) || te(i[b], t) || []), Object.keys(i).forEach((c) => {
        (e === b || e === c) && Object.keys(i[c]).forEach((h) => {
          d.test(h) && i[c][h].push([s, n]);
        });
      }), Object.keys(r).forEach((c) => {
        (e === b || e === c) && Object.keys(r[c]).forEach((h) => d.test(h) && r[c][h].push([s, n]));
      });
      return;
    }
    const o = et(t) || [t];
    for (let d = 0, c = o.length; d < c; d++) {
      const h = o[d];
      Object.keys(r).forEach((u) => {
        var w;
        (e === b || e === u) && ((w = r[u])[h] || (w[h] = [...te(i[u], h) || te(i[b], h) || []]), r[u][h].push([s, n - c + d + 1]));
      });
    }
  }
  buildAllMatchers() {
    const e = /* @__PURE__ */ Object.create(null);
    return Object.keys(a(this, B)).concat(Object.keys(a(this, W))).forEach((t) => {
      e[t] || (e[t] = g(this, Ae, ut).call(this, t));
    }), f(this, W, f(this, B, void 0)), Vt(), e;
  }
}, W = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet(), ut = /* @__PURE__ */ __name2(function(e) {
  const t = [];
  let s = e === b;
  return [a(this, W), a(this, B)].forEach((i) => {
    const r = i[e] ? Object.keys(i[e]).map((n) => [n, i[e][n]]) : [];
    r.length !== 0 ? (s || (s = true), t.push(...r)) : e !== b && t.push(...Object.keys(i[b]).map((n) => [n, i[b][n]]));
  }), s ? Yt(t) : null;
}, "ut"), Ye);
var q;
var D;
var Je;
var Xt = (Je = class {
  static {
    __name(this, "Je");
  }
  static {
    __name2(this, "Je");
  }
  constructor(e) {
    p(this, "name", "SmartRouter");
    v(this, q, []);
    v(this, D, []);
    f(this, q, e.routers);
  }
  add(e, t, s) {
    if (!a(this, D)) throw new Error(ot);
    a(this, D).push([e, t, s]);
  }
  match(e, t) {
    if (!a(this, D)) throw new Error("Fatal error");
    const s = a(this, q), i = a(this, D), r = s.length;
    let n = 0, o;
    for (; n < r; n++) {
      const l = s[n];
      try {
        for (let d = 0, c = i.length; d < c; d++) l.add(...i[d]);
        o = l.match(e, t);
      } catch (d) {
        if (d instanceof ct) continue;
        throw d;
      }
      this.match = l.match.bind(l), f(this, q, [l]), f(this, D, void 0);
      break;
    }
    if (n === r) throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, o;
  }
  get activeRouter() {
    if (a(this, D) || a(this, q).length !== 1) throw new Error("No active router has been determined yet.");
    return a(this, q)[0];
  }
}, q = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), Je);
var fe = /* @__PURE__ */ Object.create(null);
var K;
var T;
var Q;
var de;
var O;
var H;
var V;
var he;
var Qt = (he = class {
  static {
    __name(this, "he");
  }
  static {
    __name2(this, "he");
  }
  constructor(t, s, i) {
    v(this, H);
    v(this, K);
    v(this, T);
    v(this, Q);
    v(this, de, 0);
    v(this, O, fe);
    if (f(this, T, i || /* @__PURE__ */ Object.create(null)), f(this, K, []), t && s) {
      const r = /* @__PURE__ */ Object.create(null);
      r[t] = { handler: s, possibleKeys: [], score: 0 }, f(this, K, [r]);
    }
    f(this, Q, []);
  }
  insert(t, s, i) {
    f(this, de, ++Le(this, de)._);
    let r = this;
    const n = jt(s), o = [];
    for (let l = 0, d = n.length; l < d; l++) {
      const c = n[l], h = n[l + 1], u = kt(c, h), w = Array.isArray(u) ? u[0] : c;
      if (w in a(r, T)) {
        r = a(r, T)[w], u && o.push(u[1]);
        continue;
      }
      a(r, T)[w] = new he(), u && (a(r, Q).push(u), o.push(u[1])), r = a(r, T)[w];
    }
    return a(r, K).push({ [t]: { handler: i, possibleKeys: o.filter((l, d, c) => c.indexOf(l) === d), score: a(this, de) } }), r;
  }
  search(t, s) {
    var d;
    const i = [];
    f(this, O, fe);
    let n = [this];
    const o = Qe(s), l = [];
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c], w = c === h - 1, y = [];
      for (let E = 0, P = n.length; E < P; E++) {
        const m = n[E], R = a(m, T)[u];
        R && (f(R, O, a(m, O)), w ? (a(R, T)["*"] && i.push(...g(this, H, V).call(this, a(R, T)["*"], t, a(m, O))), i.push(...g(this, H, V).call(this, R, t, a(m, O)))) : y.push(R));
        for (let F = 0, Ee = a(m, Q).length; F < Ee; F++) {
          const Re = a(m, Q)[F], N = a(m, O) === fe ? {} : { ...a(m, O) };
          if (Re === "*") {
            const L = a(m, T)["*"];
            L && (i.push(...g(this, H, V).call(this, L, t, a(m, O))), f(L, O, N), y.push(L));
            continue;
          }
          const [gt, $e, ue] = Re;
          if (!u && !(ue instanceof RegExp)) continue;
          const I = a(m, T)[gt], mt = o.slice(c).join("/");
          if (ue instanceof RegExp) {
            const L = ue.exec(mt);
            if (L) {
              if (N[$e] = L[0], i.push(...g(this, H, V).call(this, I, t, a(m, O), N)), Object.keys(a(I, T)).length) {
                f(I, O, N);
                const Pe = ((d = L[0].match(/\//)) == null ? void 0 : d.length) ?? 0;
                (l[Pe] || (l[Pe] = [])).push(I);
              }
              continue;
            }
          }
          (ue === true || ue.test(u)) && (N[$e] = u, w ? (i.push(...g(this, H, V).call(this, I, t, N, a(m, O))), a(I, T)["*"] && i.push(...g(this, H, V).call(this, a(I, T)["*"], t, N, a(m, O)))) : (f(I, O, N), y.push(I)));
        }
      }
      n = y.concat(l.shift() ?? []);
    }
    return i.length > 1 && i.sort((c, h) => c.score - h.score), [i.map(({ handler: c, params: h }) => [c, h])];
  }
}, K = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakSet(), V = /* @__PURE__ */ __name2(function(t, s, i, r) {
  const n = [];
  for (let o = 0, l = a(t, K).length; o < l; o++) {
    const d = a(t, K)[o], c = d[s] || d[b], h = {};
    if (c !== void 0 && (c.params = /* @__PURE__ */ Object.create(null), n.push(c), i !== fe || r && r !== fe)) for (let u = 0, w = c.possibleKeys.length; u < w; u++) {
      const y = c.possibleKeys[u], E = h[c.score];
      c.params[y] = r != null && r[y] && !E ? r[y] : i[y] ?? (r == null ? void 0 : r[y]), h[c.score] = true;
    }
  }
  return n;
}, "V"), he);
var Z;
var Xe;
var Zt = (Xe = class {
  static {
    __name(this, "Xe");
  }
  static {
    __name2(this, "Xe");
  }
  constructor() {
    p(this, "name", "TrieRouter");
    v(this, Z);
    f(this, Z, new Qt());
  }
  add(e, t, s) {
    const i = et(t);
    if (i) {
      for (let r = 0, n = i.length; r < n; r++) a(this, Z).insert(e, i[r], s);
      return;
    }
    a(this, Z).insert(e, t, s);
  }
  match(e, t) {
    return a(this, Z).search(e, t);
  }
}, Z = /* @__PURE__ */ new WeakMap(), Xe);
var ft = class extends Ut {
  static {
    __name(this, "ft");
  }
  static {
    __name2(this, "ft");
  }
  constructor(e = {}) {
    super(e), this.router = e.router ?? new Xt({ routers: [new Jt(), new Zt()] });
  }
};
var es = /^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;
var Be = /* @__PURE__ */ __name2((e, t = ss) => {
  const s = /\.([a-zA-Z0-9]+?)$/, i = e.match(s);
  if (!i) return;
  let r = t[i[1]];
  return r && r.startsWith("text") && (r += "; charset=utf-8"), r;
}, "Be");
var ts = { aac: "audio/aac", avi: "video/x-msvideo", avif: "image/avif", av1: "video/av1", bin: "application/octet-stream", bmp: "image/bmp", css: "text/css", csv: "text/csv", eot: "application/vnd.ms-fontobject", epub: "application/epub+zip", gif: "image/gif", gz: "application/gzip", htm: "text/html", html: "text/html", ico: "image/x-icon", ics: "text/calendar", jpeg: "image/jpeg", jpg: "image/jpeg", js: "text/javascript", json: "application/json", jsonld: "application/ld+json", map: "application/json", mid: "audio/x-midi", midi: "audio/x-midi", mjs: "text/javascript", mp3: "audio/mpeg", mp4: "video/mp4", mpeg: "video/mpeg", oga: "audio/ogg", ogv: "video/ogg", ogx: "application/ogg", opus: "audio/opus", otf: "font/otf", pdf: "application/pdf", png: "image/png", rtf: "application/rtf", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", ts: "video/mp2t", ttf: "font/ttf", txt: "text/plain", wasm: "application/wasm", webm: "video/webm", weba: "audio/webm", webmanifest: "application/manifest+json", webp: "image/webp", woff: "font/woff", woff2: "font/woff2", xhtml: "application/xhtml+xml", xml: "application/xml", zip: "application/zip", "3gp": "video/3gpp", "3g2": "video/3gpp2", gltf: "model/gltf+json", glb: "model/gltf-binary" };
var ss = ts;
var is = /* @__PURE__ */ __name2((...e) => {
  let t = e.filter((r) => r !== "").join("/");
  t = t.replace(new RegExp("(?<=\\/)\\/+", "g"), "");
  const s = t.split("/"), i = [];
  for (const r of s) r === ".." && i.length > 0 && i.at(-1) !== ".." ? i.pop() : r !== "." && i.push(r);
  return i.join("/") || ".";
}, "is");
var pt = { br: ".br", zstd: ".zst", gzip: ".gz" };
var rs = Object.keys(pt);
var ns = "index.html";
var as = /* @__PURE__ */ __name2((e) => {
  const t = e.root ?? "./", s = e.path, i = e.join ?? is;
  return async (r, n) => {
    var h, u, w, y;
    if (r.finalized) return n();
    let o;
    if (e.path) o = e.path;
    else try {
      if (o = decodeURIComponent(r.req.path), /(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o)) throw new Error();
    } catch {
      return await ((h = e.onNotFound) == null ? void 0 : h.call(e, r.req.path, r)), n();
    }
    let l = i(t, !s && e.rewriteRequestPath ? e.rewriteRequestPath(o) : o);
    e.isDir && await e.isDir(l) && (l = i(l, ns));
    const d = e.getContent;
    let c = await d(l, r);
    if (c instanceof Response) return r.newResponse(c.body, c);
    if (c) {
      const E = e.mimes && Be(l, e.mimes) || Be(l);
      if (r.header("Content-Type", E || "application/octet-stream"), e.precompressed && (!E || es.test(E))) {
        const P = new Set((u = r.req.header("Accept-Encoding")) == null ? void 0 : u.split(",").map((m) => m.trim()));
        for (const m of rs) {
          if (!P.has(m)) continue;
          const R = await d(l + pt[m], r);
          if (R) {
            c = R, r.header("Content-Encoding", m), r.header("Vary", "Accept-Encoding", { append: true });
            break;
          }
        }
      }
      return await ((w = e.onFound) == null ? void 0 : w.call(e, l, r)), r.body(c);
    }
    await ((y = e.onNotFound) == null ? void 0 : y.call(e, l, r)), await n();
  };
}, "as");
var os = /* @__PURE__ */ __name2(async (e, t) => {
  let s;
  t && t.manifest ? typeof t.manifest == "string" ? s = JSON.parse(t.manifest) : s = t.manifest : typeof __STATIC_CONTENT_MANIFEST == "string" ? s = JSON.parse(__STATIC_CONTENT_MANIFEST) : s = __STATIC_CONTENT_MANIFEST;
  let i;
  t && t.namespace ? i = t.namespace : i = __STATIC_CONTENT;
  const r = s[e];
  if (!r) return null;
  const n = await i.get(r, { type: "stream" });
  return n || null;
}, "os");
var cs = /* @__PURE__ */ __name2((e) => async function(s, i) {
  return as({ ...e, getContent: /* @__PURE__ */ __name2(async (n) => os(n, { manifest: e.manifest, namespace: e.namespace ? e.namespace : s.env ? s.env.__STATIC_CONTENT : void 0 }), "getContent") })(s, i);
}, "cs");
var ls = /* @__PURE__ */ __name2((e) => cs(e), "ls");
var He = new ft();
He.use("/static/*", ls({ root: "./public" }));
He.get("/", (e) => e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Happy Valentine's Day \u2764\uFE0F</title>
        <link rel="stylesheet" href="/static/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <!-- Floating Hearts Background -->
        <div class="hearts-container" id="hearts-container"></div>
        
        <!-- Music Control -->
        <button class="music-control" id="music-control" aria-label="Toggle Music">
            <span id="music-icon">\u{1F3B5}</span>
        </button>
        
        <!-- Hidden Audio Element -->
        <audio id="background-music" loop>
            <source src="https://www.bensound.com/bensound-music/bensound-love.mp3" type="audio/mpeg">
        </audio>

        <!-- SECTION 1: CINEMATIC INTRO -->
        <section class="intro-section" id="intro-section">
            <div class="sparkles" id="sparkles"></div>
            <div class="intro-content">
                <h1 class="intro-title" id="intro-title">Happy Valentine's Day, My Favorite Person \u2764\uFE0F</h1>
                <p class="intro-subtitle" id="intro-subtitle">2 months\u2026 and already so many beautiful moments.</p>
                <button class="start-button" id="start-button">Start Our Story \u{1F496}</button>
            </div>
        </section>

        <!-- SECTION 2: HOW IT STARTED -->
        <section class="timeline-section" id="timeline-section">
            <div class="container">
                <h2 class="section-title fade-in">How We Started...</h2>
                <div class="timeline">
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">\u{1F4AC}</div>
                        <div class="timeline-content">
                            <h3>The First Conversation</h3>
                            <p class="typewriter">That moment when we started talking and time just... disappeared.</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">\u{1F60A}</div>
                        <div class="timeline-content">
                            <h3>The First Laugh</h3>
                            <p class="typewriter">When I realized your laugh was my new favorite sound.</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">\u{1F4AD}</div>
                        <div class="timeline-content">
                            <h3>The Realization</h3>
                            <p class="typewriter">The moment we both knew... this feels different. This feels right.</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">\u{1F917}</div>
                        <div class="timeline-content">
                            <h3>The Comfort</h3>
                            <p class="typewriter">Finding someone who feels like home. That's you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: OUR FUTURE ADVENTURES -->
        <section class="adventures-section" id="adventures-section">
            <div class="container">
                <h2 class="section-title fade-in">The Adventures Waiting for Us...</h2>
                <div class="adventure-grid">
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">\u{1F30D}</div>
                            <h3>Traveling Together</h3>
                        </div>
                        <div class="card-back">
                            <p>Watching sunsets in new places, mountain trips, beach walks, and late-night city strolls. Creating stories everywhere we go.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">\u{1F36B}</div>
                            <h3>Chocolate Dates</h3>
                        </div>
                        <div class="card-back">
                            <p>Trying new cafes, sharing desserts, feeding each other chocolate playfully, and finding our favorite spots together.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">\u{1F3AC}</div>
                            <h3>Movie Nights</h3>
                        </div>
                        <div class="card-back">
                            <p>Arguing over what to watch, falling asleep during movies, random pillow fights, and making every night an adventure.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">\u{1F4F8}</div>
                            <h3>Creating Memories</h3>
                        </div>
                        <div class="card-back">
                            <p>Taking silly selfies, random dance videos, laughing at nothing, and capturing every beautiful moment together.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">\u{1F9E0}</div>
                            <h3>Growing Together</h3>
                        </div>
                        <div class="card-back">
                            <p>Supporting each other's goals, motivating during tough days, and celebrating every small win on this journey.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">\u{1F31F}</div>
                            <h3>Making Magic</h3>
                        </div>
                        <div class="card-back">
                            <p>Creating our own little world, building inside jokes, having spontaneous adventures, and just being happy together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: A LETTER TO HER -->
        <section class="letter-section" id="letter-section">
            <div class="container">
                <div class="letter-container fade-in">
                    <div class="letter-header">\u{1F48C}</div>
                    <div class="letter-content" id="letter-content">
                        <!-- Content will be added via JavaScript typewriter effect -->
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: SURPRISE BUTTON -->
        <section class="surprise-section" id="surprise-section">
            <div class="container">
                <button class="surprise-button" id="surprise-button">Click for a Surprise \u2764\uFE0F</button>
            </div>
        </section>

        <!-- Surprise Modal -->
        <div class="surprise-modal" id="surprise-modal">
            <div class="surprise-content">
                <div class="gift-box" id="gift-box">\u{1F381}</div>
                <div class="surprise-message" id="surprise-message">
                    <h2>You are already my favorite adventure.</h2>
                    <p>Every moment with you is a gift \u{1F49D}</p>
                </div>
            </div>
        </div>

        <!-- SECTION 6: MEMORY GALLERY -->
        <section class="gallery-section" id="gallery-section">
            <div class="container">
                <h2 class="section-title fade-in">Our Beautiful Moments \u{1F4F8}</h2>
                <p class="gallery-note fade-in">\u2728 You can easily add your own photos by editing the gallery data in script.js</p>
                <div class="gallery-grid" id="gallery-grid">
                    <!-- Gallery items will be dynamically generated -->
                </div>
            </div>
        </section>

        <!-- SECTION 7: OUR MINI BUCKET LIST -->
        <section class="bucketlist-section" id="bucketlist-section">
            <div class="container">
                <h2 class="section-title fade-in">Our Mini Bucket List \u{1F495}</h2>
                <p class="bucketlist-subtitle fade-in">Adventures we'll check off together...</p>
                <div class="bucketlist-grid">
                    <div class="bucket-item fade-in" data-id="1">
                        <div class="checkbox"></div>
                        <span>Travel somewhere new together</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="2">
                        <div class="checkbox"></div>
                        <span>Try 10 new cafes</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="3">
                        <div class="checkbox"></div>
                        <span>Watch the sunrise together</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="4">
                        <div class="checkbox"></div>
                        <span>Have a spontaneous day trip</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="5">
                        <div class="checkbox"></div>
                        <span>Create 100 inside jokes</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="6">
                        <div class="checkbox"></div>
                        <span>Dance in the rain</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="7">
                        <div class="checkbox"></div>
                        <span>Cook a meal together (and not burn it)</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="8">
                        <div class="checkbox"></div>
                        <span>Take a thousand silly photos</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="9">
                        <div class="checkbox"></div>
                        <span>Build a playlist of "our songs"</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="10">
                        <div class="checkbox"></div>
                        <span>Just keep being this happy together</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <p>Made with endless love \u{1F496}</p>
            <p class="footer-note">2 months down, countless adventures to go...</p>
        </footer>

        <script src="/static/script.js"><\/script>
    </body>
    </html>
  `));
var qe = new ft();
var ds = Object.assign({ "/src/index.tsx": He });
var vt = false;
for (const [, e] of Object.entries(ds)) e && (qe.all("*", (t) => {
  let s;
  try {
    s = t.executionCtx;
  } catch {
  }
  return e.fetch(t.req.raw, t.env, s);
}), qe.notFound((t) => {
  let s;
  try {
    s = t.executionCtx;
  } catch {
  }
  return e.fetch(t.req.raw, t.env, s);
}), vt = true);
if (!vt) throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");
var drainBody = /* @__PURE__ */ __name2(async (request, env22, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env22);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env22, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env22);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = qe;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env22, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env22, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env22, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env22, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env22, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env22, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env22, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env22, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env22, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env22, ctx) => {
      this.env = env22;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-aUwJo3/mkpa0aswor.js
var define_ROUTES_default = { version: 1, include: ["/*"], exclude: ["/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env3, context2) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env3.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env3, context2);
      }
    }
    return env3.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } catch (e) {
    const error3 = reduceError2(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-zOAakc/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env3, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env3, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env3, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env3, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-zOAakc/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env3, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env3, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env3, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env3, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env3, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env3, ctx) => {
      this.env = env3;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=mkpa0aswor.js.map

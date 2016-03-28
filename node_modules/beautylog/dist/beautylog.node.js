/// <reference path="./typings/main.d.ts" />
exports.log = require("./beautylog.node.log");
exports.table = require("./beautylog.node.table");
exports.code = require("./beautylog.node.code");
var figletModule = require("./beautylog.node.figlet");
exports.figlet = figletModule.figlet;
exports.figletSync = figletModule.figletSync;
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = function (logText) {
    return exports.log(logText, 'dir');
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = function (logText) {
    return exports.log(logText, 'error');
};
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.info = function (logText) {
    return exports.log(logText, 'info');
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = function (logText) {
    return exports.log(logText, 'ok');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = function (logText) {
    return exports.log(logText, 'success');
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = function (logText) {
    return exports.log(logText, 'warn');
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUU5QixXQUFHLFdBQVcsc0JBQXNCLENBQUMsQ0FBQztBQUN0QyxhQUFLLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUMxQyxZQUFJLFdBQVcsdUJBQXVCLENBQUMsQ0FBQztBQUN0RCxJQUFPLFlBQVksV0FBVyx5QkFBeUIsQ0FBQyxDQUFDO0FBRTlDLGNBQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQzdCLGtCQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUNoRDs7OztHQUlHO0FBQ1EsV0FBRyxHQUFHLFVBQVMsT0FBTztJQUM3QixNQUFNLENBQUMsV0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFHRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLFVBQVMsT0FBTztJQUMvQixNQUFNLENBQUMsV0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsWUFBSSxHQUFHLFVBQVMsT0FBTztJQUM5QixNQUFNLENBQUMsV0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLFVBQVMsT0FBTztJQUM1QixNQUFNLENBQUMsV0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsZUFBTyxHQUFHLFVBQVMsT0FBTztJQUNqQyxNQUFNLENBQUMsV0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsWUFBSSxHQUFHLFVBQVMsT0FBTztJQUM5QixNQUFNLENBQUMsV0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMiLCJmaWxlIjoiYmVhdXR5bG9nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmV4cG9ydCBpbXBvcnQgbG9nID0gcmVxdWlyZShcIi4vYmVhdXR5bG9nLm5vZGUubG9nXCIpO1xuZXhwb3J0IGltcG9ydCB0YWJsZSA9IHJlcXVpcmUoXCIuL2JlYXV0eWxvZy5ub2RlLnRhYmxlXCIpO1xuZXhwb3J0IGltcG9ydCBjb2RlID0gcmVxdWlyZShcIi4vYmVhdXR5bG9nLm5vZGUuY29kZVwiKTtcbmltcG9ydCBmaWdsZXRNb2R1bGUgPSByZXF1aXJlKFwiLi9iZWF1dHlsb2cubm9kZS5maWdsZXRcIik7XG5cbmV4cG9ydCBsZXQgZmlnbGV0ID0gZmlnbGV0TW9kdWxlLmZpZ2xldDtcbmV4cG9ydCBsZXQgZmlnbGV0U3luYyA9IGZpZ2xldE1vZHVsZS5maWdsZXRTeW5jO1xuLyoqXG4gKiBsb2dzIGFuIGRpcmVjdG9yeSB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgZGlyID0gZnVuY3Rpb24obG9nVGV4dCkge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2RpcicpO1xufTtcblxuXG4vKipcbiAqIGxvZ3MgYW4gZXJyb3IgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgbGV0IGVycm9yID0gZnVuY3Rpb24obG9nVGV4dCkge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2Vycm9yJyk7XG59O1xuXG4vKipcbiAqIGxvZ3MgYW4gaW5mbyB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgaW5mbyA9IGZ1bmN0aW9uKGxvZ1RleHQpIHtcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdpbmZvJyk7XG59O1xuXG4vKipcbiAqIGxvZ3MgYW4gJ09LIScgbWVzc2FnZSB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgb2sgPSBmdW5jdGlvbihsb2dUZXh0KSB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnb2snKTtcbn07XG5cbi8qKlxuICogbG9ncyBhIHN1Y2Nlc3MgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHQgc3RyaW5nIHRvIGxvZyBhcyBlcnJvclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgc3VjY2VzcyA9IGZ1bmN0aW9uKGxvZ1RleHQpIHtcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICdzdWNjZXNzJyk7XG59O1xuXG4vKipcbiAqIGxvZ3MgYSAnd2FybjonIG1lc3NhZ2UgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHQgc3RyaW5nIHRvIGxvZyBhcyBlcnJvclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgd2FybiA9IGZ1bmN0aW9uKGxvZ1RleHQpIHtcbiAgICByZXR1cm4gbG9nKGxvZ1RleHQsICd3YXJuJyk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

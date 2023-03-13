class Promise {
    constructor(executor) {
      this.status = "pending";
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.status === "pending") {
          this.status = "fulfilled";
          this.value = value;
          this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          this.reason = reason;
          this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      const newPromise = new Promise((resolve, reject) => {
        const onFulfilledCallback = (value) => {
          try {
            const result = onFulfilled(value);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        const onRejectedCallback = (reason) => {
          try {
            const result = onRejected(reason);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.status === "fulfilled") {
          setTimeout(() => onFulfilledCallback(this.value), 0);
        } else if (this.status === "rejected") {
          setTimeout(() => onRejectedCallback(this.reason), 0);
        } else if (this.status === "pending") {
          this.onFulfilledCallbacks.push(onFulfilledCallback);
          this.onRejectedCallbacks.push(onRejectedCallback);
        }
      });
  
      return newPromise;
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    finally(onFinally) {
      return this.then(
        (value) => Promise.resolve(onFinally()).then(() => value),
        (reason) =>
          Promise.resolve(onFinally()).then(() => {
            throw reason;
          })
      );
    }
  }
  
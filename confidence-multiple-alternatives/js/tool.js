<!-- sortWithIndeces-->
function sortWithIndeces(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}

<!-- uniform sample within a circle-->
function rand_circ(N,x,y,r){
  var Ns = Math.round(1.28*N + 2.5*Math.sqrt(N) + 100); //% 4/pi = 1.2732
  var rawX  = math.ones(Ns);
  var rawY  = math.ones(Ns);
  rawX._data = math.add(Array.from({length: Ns}, () => Math.random()*2*r), -r);
  rawY._data = math.add(Array.from({length: Ns}, () => Math.random()*2*r), -r);
  radius = math.sqrt(math.add(math.square(rawX),math.square(rawY)));
  var X  = new Array;
  var Y  = new Array;
  for (i=0; i<Ns; i++){
    if (radius._data[i] < r) {
      X = X.concat(rawX._data[i]+x);
      Y = Y.concat(rawY._data[i]+y);
    }
    if (X.length == N){break;}
  }
  return [X,Y]
}

<!-- Shuffle -->
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
// var arr = [2, 11, 37, 42];
// arr = shuffle(arr);
// console.log(arr);

<!-- randgen -->
/*jslint indent: 2, plusplus: true, sloppy: true */
// Generate uniformly distributed random numbers
// Gives a random number on the interval [min, max).
// If discrete is true, the number will be an integer.
function runif(min, max, discrete) {
  if (min === undefined) {
    min = 0;
  }
  if (max === undefined) {
    max = 1;
  }
  if (discrete === undefined) {
    discrete = false;
  }
  if (discrete) {
    return Math.floor(runif(min, max, false));
  }
  return Math.random() * (max - min) + min;
}

// Generate normally-distributed random nubmers
// Algorithm adapted from:
// http://c-faq.com/lib/gaussian.html
function rnorm(mean, stdev) {
  var u1, u2, v1, v2, s;
  if (mean === undefined) {
    mean = 0.0;
  }
  if (stdev === undefined) {
    stdev = 1.0;
  }
  if (rnorm.v2 === null) {
    do {
      u1 = Math.random();
      u2 = Math.random();

      v1 = 2 * u1 - 1;
      v2 = 2 * u2 - 1;
      s = v1 * v1 + v2 * v2;
    } while (s === 0 || s >= 1);

    rnorm.v2 = v2 * Math.sqrt(-2 * Math.log(s) / s);
    return stdev * v1 * Math.sqrt(-2 * Math.log(s) / s) + mean;
  }

  v2 = rnorm.v2;
  rnorm.v2 = null;
  return stdev * v2 + mean;
}

rnorm.v2 = null;

// Generate Chi-square distributed random numbers
function rchisq(degreesOfFreedom) {
  if (degreesOfFreedom === undefined) {
    degreesOfFreedom = 1;
  }
  var i, z, sum = 0.0;
  for (i = 0; i < degreesOfFreedom; i++) {
    z = rnorm();
    sum += z * z;
  }

  return sum;
}

// Generate Poisson distributed random numbers
function rpoisson(lambda) {
  if (lambda === undefined) {
    lambda = 1;
  }
  var l = Math.exp(-lambda),
    k = 0,
    p = 1.0;
  do {
    k++;
    p *= Math.random();
  } while (p > l);

  return k - 1;
}

// Generate Cauchy distributed random numbers
function rcauchy(loc, scale) {
  if (loc === undefined) {
    loc = 0.0;
  }
  if (scale === undefined) {
    scale = 1.0;
  }
  var n2, n1 = rnorm();
  do {
    n2 = rnorm();
  } while (n2 === 0.0);

  return loc + scale * n1 / n2;
}

// Bernoulli distribution: gives 1 with probability p
function rbernoulli(p) {
  return Math.random() < p ? 1 : 0;
}

// Vectorize a random generator
function vectorize(generator) {
  return function () {
    var n, result, i, args;
    args = [].slice.call(arguments)
    n = args.shift();
    result = [];
    for (i = 0; i < n; i++) {
      result.push(generator.apply(this, args));
    }
    return result;
  };
}

// Generate a histogram from a list of numbers
function histogram(data, binCount) {
  binCount = binCount || 10;

  var bins, i, scaled,
    max = Math.max.apply(this, data),
    min = Math.min.apply(this, data);

  // edge case: max == min
  if (max === min) {
    return [data.length];
  }

  bins = [];

  // zero each bin
  for (i = 0; i < binCount; i++) {
    bins.push(0);
  }

  for (i = 0; i < data.length; i++) {
    // scale it to be between 0 and 1
    scaled = (data[i] - min) / (max - min);

    // scale it up to the histogram size
    scaled *= binCount;

    // drop it in a bin
    scaled = Math.floor(scaled);

    // edge case: the max
    if (scaled === binCount) { scaled--; }

    bins[scaled]++;
  }

  return bins;
}

/**
 * Get a random element from a list
 */
function rlist(list) {
  return list[runif(0, list.length, true)];
}

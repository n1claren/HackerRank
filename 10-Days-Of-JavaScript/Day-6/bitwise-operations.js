function getMaxLessThanK(n, k) {
    let max = 0;
    
    for (let i = 1; i <= n; i++) {  
      for (let z = i + 1; z <= n; z++) {
        (i & z) > max && (i & z) < k ? (max = i & z) : max;
      }
    }
    
    return max;
  }
  
  function main() {
      const q = +(readLine());
      
      for (let i = 0; i < q; i++) {
          const [n, k] = readLine().split(' ').map(Number);
          
          console.log(getMaxLessThanK(n, k));
      }
  }
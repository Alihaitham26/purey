function createRoot(element){
  return {
    render: (child) => {
      root = element.appendChild(child);
    }
  }
}
module.exports = createRoot;

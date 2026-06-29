const fs = require('fs');

let file = 'agents.html';
if (fs.existsSync(file)) {
  let html = fs.readFileSync(file, 'utf8');
  
  // Make agent-card h-100 and a flex column
  html = html.replace(/class="agent-card"/g, 'class="agent-card h-100 d-flex flex-column"');
  
  // Make agent-info flex-grow and justify-between
  html = html.replace(/class="agent-info"/g, 'class="agent-info flex-grow-1 d-flex flex-column justify-content-between"');
  
  // Wrap top content in agent-info inside a <div> so flex justify-between works correctly with the bottom button
  html = html.replace(/<div class="agent-info flex-grow-1 d-flex flex-column justify-content-between">\s*<h4>/g, '<div class="agent-info flex-grow-1 d-flex flex-column justify-content-between">\n                <div>\n                  <h4>');
  
  html = html.replace(/<\/div>\s*<a href="agent-profile.html" class="view-listings-btn">/g, '</div>\n                </div>\n                <a href="agent-profile.html" class="view-listings-btn">');
  
  fs.writeFileSync(file, html);
  console.log(file + ' updated');
}

const fs = require('fs');

['index.html', 'agents.html'].forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    
    // add h-100 to featured-agent
    html = html.replace(/class="featured-agent"/g, 'class="featured-agent h-100"');
    
    // add flex properties to agent-wrapper
    html = html.replace(/class="agent-wrapper"/g, 'class="agent-wrapper d-flex flex-column"');
    
    fs.writeFileSync(file, html);
    console.log(file + ' updated');
  }
});

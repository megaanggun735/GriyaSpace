const fs = require('fs');

const files = [
  'blog.html',
  'properties.html',
  'services.html',
  'service-details.html',
  'agent-profile.html',
  'agents.html',
  'property-details.html',
  'contact.html',
  'galery.html'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace href="#" in pagination with javascript:void(0);
    html = html.replace(/href="#" aria-label="Previous page"/g, 'href="javascript:void(0);" aria-label="Previous page"');
    html = html.replace(/href="#" aria-label="Next page"/g, 'href="javascript:void(0);" aria-label="Next page"');
    
    // Replace empty href="#" in lists
    html = html.replace(/<a class="page-link" href="#">/g, '<a class="page-link" href="javascript:void(0);">');
    html = html.replace(/<li><a href="#"/g, '<li><a href="javascript:void(0);"');
    
    // For blog links to dummy #, change to blog-details.html
    html = html.replace(/<a href="#">/g, '<a href="blog-details.html">');
    
    fs.writeFileSync(file, html);
    console.log(file + ' updated links');
  }
});

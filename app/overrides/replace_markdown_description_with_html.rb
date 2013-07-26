Deface::Override.new(:virtual_path => 'spree/products/show',
  :name => 'replace_markdown_description_with_html',
  :replace => 'div[data-hook="description"]',
  :text => '<%= raw @product.description_html %>')

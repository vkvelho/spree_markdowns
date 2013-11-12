Deface::Override.new(:virtual_path => 'spree/admin/products/_form',
  :name => 'add_html_preview_for_markdown_description',
  :insert_bottom => "div[data-hook='admin_product_form_left']",
  :text => '<div id="product_description_preview"><%= raw @product.description_html rescue Spree.t(:product_has_no_description) %></div>')

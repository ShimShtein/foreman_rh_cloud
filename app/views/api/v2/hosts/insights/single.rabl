node :cves_attributes do
  # partial 'api/v2/hosts/insights/base', object: @object&.insights_facet
  {
    show_cves: true
  }
end

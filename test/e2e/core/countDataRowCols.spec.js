describe('Core.countDataRowCols', () => {
  const id = 'testContainer';

  beforeEach(function() {
    this.$container = $(`<div id="${id}"></div>`).appendTo('body');
  });

  afterEach(function() {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });

  it('should return the number of columns in the provided dataset, regardless of the `columns` settings (when the dataset is an array of arrays).', () => {
    const hot = handsontable({
      data: [['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']],
      columns: [{}]
    });

    expect(hot.countDataRowCols()).toBe(15);
  });

  it('should return the number of columns in the provided dataset, regardless of the `columns` settings (when the dataset is an array of objects).', () => {
    const hot = handsontable({
      data: [{ a: 0, b: 1, c: 2 }],
      columns: [{ data: 'a' }]
    });

    expect(hot.countDataRowCols()).toBe(3);
  });
});

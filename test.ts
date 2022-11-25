import{Merge} from 'merge'
import{expect} from 'chai'

describe('merge', () => {
  it('should merge two lists', () => {
    let test = new Merge
    let l1: number[] = [1,3,5]
    let l2: number[] = [2,4,6,7]
    expect(test.merge(l1, l2)).to.equal([1,2,3,4,5,6,7])
    })
})
